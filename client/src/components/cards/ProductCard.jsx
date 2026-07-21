import { FaHeart, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const fallbackImage =
    "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800";

  const postedDate = product.createdAt
    ? new Date(product.createdAt).toLocaleDateString("en-IN")
    : "Today";

  return (
    <Link to={`/product/${product._id}`}>
      <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer hover:-translate-y-1">

        {/* Product Image */}
        <div className="relative overflow-hidden">

          <img
            src={product.image || fallbackImage}
            alt={product.title || "Product"}
            className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = fallbackImage;
            }}
          />

          {/* Wishlist */}
          <button
            type="button"
            className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-red-50 hover:text-red-500 transition"
          >
            <FaHeart />
          </button>

          {/* Category */}
          <span className="absolute bottom-3 left-3 bg-[#002F34] text-white text-xs px-3 py-1 rounded-full">
            {product.category || "General"}
          </span>

        </div>

        {/* Product Info */}
        <div className="p-4">

          <h2 className="text-2xl font-bold text-[#002F34]">
            ₹ {Number(product.price || 0).toLocaleString("en-IN")}
          </h2>

          <h3 className="mt-2 font-semibold text-lg line-clamp-1">
            {product.title || "Untitled Product"}
          </h3>

          <p className="text-gray-500 mt-2 text-sm line-clamp-2">
            {product.description || "No description available"}
          </p>

          <div className="flex justify-between items-center mt-5 text-gray-500 text-sm">

            <span className="flex items-center gap-2">
              <FaMapMarkerAlt />
              {product.city || "Unknown"}
            </span>

            <span className="flex items-center gap-2">
              <FaClock />
              {postedDate}
            </span>

          </div>

        </div>

      </div>
    </Link>
  );
}