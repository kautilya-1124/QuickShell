import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import ProductGallery from "../components/product/ProductGallery";
import ProductInfo from "../components/product/ProductInfo";
import SellerCard from "../components/product/SellerCard";
import ProductDescription from "../components/product/ProductDescription";
import ProductDetails from "../components/product/ProductDetails";
import RelatedProducts from "../components/product/RelatedProducts";

import { getProductById } from "../services/productService";
import { createConversation } from "../services/chatService"; 

export default function Product() {
  const { id } = useParams();
const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {
    try {
      const data = await getProductById(id);
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChat = async () => {
  const token = localStorage.getItem("token");

  if (!token) {
    navigate("/login");
    return;
  }

  try {
    const conversation = await createConversation(product.seller._id);

    if (conversation) {
      navigate(`/chat/${conversation._id}`);
    }
  } catch (error) {
    console.error(error);
  }
};

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="text-center py-20 text-2xl">
          Loading...
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-5 py-10">

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Image */}

          <div>

            <ProductGallery
               image={product.image}
               title={product.title}
            />

            <ProductInfo product={product} />

            <SellerCard seller={product.seller} />

            <ProductDescription
              description={product.description}
            />

            <ProductDetails
              product={product}
            />
            
          </div>

          {/* Details */}

          <div>

            <h1 className="text-4xl font-bold text-[#002F34]">
              ₹ {Number(product.price).toLocaleString("en-IN")}
            </h1>
            <button
  onClick={handleChat}
  className="mt-6 w-full bg-[#002F34] text-white py-4 rounded-xl font-semibold text-lg hover:bg-[#01464d] transition"
>
  💬 Chat with Seller
</button>

            <h2 className="text-3xl font-semibold mt-6">
              {product.title}
            </h2>

            <div className="mt-8">

              <h3 className="font-bold text-xl mb-3">
                Description
              </h3>

              <p className="text-gray-600 leading-8">
                {product.description}
              </p>

            </div>

            <div className="mt-10 space-y-3">

              <p>
                <strong>Category :</strong> {product.category}
              </p>

              <p>
                <strong>City :</strong> {product.city}
              </p>

            </div>

          </div>

        </div>

      </div>

      <RelatedProducts
  category={product.category}
  currentId={product._id}
/>

      <Footer />
    </>
  );
}