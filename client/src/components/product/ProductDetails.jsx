import { FaMapMarkerAlt, FaTag, FaCalendarAlt } from "react-icons/fa";

export default function ProductDetails({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mt-8">
      <h2 className="text-2xl font-bold text-[#002F34] mb-6">
        Product Details
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        <div className="flex items-center gap-3">
          <FaTag className="text-blue-600" />
          <div>
            <p className="text-gray-500 text-sm">Category</p>
            <p className="font-semibold">{product.category}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <FaMapMarkerAlt className="text-red-500" />
          <div>
            <p className="text-gray-500 text-sm">Location</p>
            <p className="font-semibold">{product.city}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <FaCalendarAlt className="text-green-600" />
          <div>
            <p className="text-gray-500 text-sm">Posted</p>
            <p className="font-semibold">
              {new Date(product.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>

        <div>
          <p className="text-gray-500 text-sm">Price</p>
          <p className="font-bold text-xl text-[#002F34]">
            ₹ {Number(product.price).toLocaleString("en-IN")}
          </p>
        </div>

      </div>
    </div>
  );
}