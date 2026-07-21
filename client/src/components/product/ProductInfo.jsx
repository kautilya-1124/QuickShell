import { FaHeart, FaShareAlt, FaMapMarkerAlt, FaTag } from "react-icons/fa";

export default function ProductInfo({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">

      {/* Price + Actions */}
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold text-[#002F34]">
          ₹ {Number(product.price).toLocaleString("en-IN")}
        </h1>

        <div className="flex gap-3">
          <button className="p-3 rounded-full border hover:bg-red-50 hover:text-red-500 transition">
            <FaHeart />
          </button>

          <button className="p-3 rounded-full border hover:bg-gray-100 transition">
            <FaShareAlt />
          </button>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-2xl font-semibold mt-6">
        {product.title}
      </h2>

      {/* Category */}
      <div className="mt-5 flex items-center gap-2 text-gray-600">
        <FaTag />
        <span>{product.category}</span>
      </div>

      {/* Location */}
      <div className="mt-3 flex items-center gap-2 text-gray-600">
        <FaMapMarkerAlt />
        <span>{product.city}</span>
      </div>

      {/* Posted */}
      <p className="mt-5 text-sm text-gray-500">
        Posted Recently
      </p>
    </div>
  );
}