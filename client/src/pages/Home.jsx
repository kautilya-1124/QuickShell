import { useEffect, useState } from "react";

import Navbar from "../components/navbar/Navbar";
import Hero from "../components/home/Hero";
import Categories from "../components/home/Categories";
import FeaturedProducts from "../components/home/FeaturedProducts";
import PopularProducts from "../components/home/PopularProducts";
import AppBanner from "../components/home/AppBanner";
import Footer from "../components/footer/Footer";

import { getProducts } from "../services/productService";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="flex justify-center items-center h-[60vh]">
          <h2 className="text-2xl font-semibold">Loading Products...</h2>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <Hero />

      <Categories />

      {/* Latest 4 Products */}
      <FeaturedProducts products={products.slice(0, 4)} />

      {/* All Products */}
      <PopularProducts products={products} />

      <AppBanner />

      <Footer />
    </>
  );
}