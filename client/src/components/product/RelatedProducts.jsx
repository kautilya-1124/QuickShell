import { useEffect, useState } from "react";
import ProductCard from "../cards/ProductCard";
import { getRelatedProducts } from "../../services/productService";

export default function RelatedProducts({ category, currentId }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, [category]);

  const loadProducts = async () => {
    const data = await getRelatedProducts(category);

    const filtered = data.filter(
      (item) => item._id !== currentId
    );

    setProducts(filtered.slice(0, 4));
  };

  if (products.length === 0) return null;

  return (
    <div className="mt-10">
      <h2 className="text-3xl font-bold mb-6">
        Related Products
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((item) => (
          <ProductCard
            key={item._id}
            product={item}
          />
        ))}
      </div>
    </div>
  );
}