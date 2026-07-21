import {
  FaUserCircle,
  FaPhoneAlt,
  FaComments,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function SellerCard({ seller }) {
  if (!seller) return null;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mt-6">

      <h2 className="text-2xl font-bold text-[#002F34]">
        Seller Information
      </h2>

      <div className="flex items-center gap-4 mt-6">

        {seller.profileImage ? (
          <img
            src={seller.profileImage}
            alt={seller.name}
            className="w-16 h-16 rounded-full object-cover"
          />
        ) : (
          <FaUserCircle
            size={60}
            className="text-gray-400"
          />
        )}

        <div>

          <h3 className="font-semibold text-xl">
            {seller.name}
          </h3>

          <p className="text-gray-500">
            Member Since{" "}
            {new Date(seller.createdAt).getFullYear()}
          </p>

        </div>

      </div>

      <div className="mt-6 space-y-3 text-gray-700">

        <div className="flex items-center gap-3">
          <FaEnvelope className="text-blue-600" />
          <span>{seller.email}</span>
        </div>

        <div className="flex items-center gap-3">
          <FaMapMarkerAlt className="text-red-500" />
          <span>{seller.city || "Location not available"}</span>
        </div>

        {seller.phone && (
          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-green-600" />
            <span>{seller.phone}</span>
          </div>
        )}

      </div>

      <button className="w-full mt-8 bg-[#002F34] text-white py-3 rounded-lg font-semibold hover:bg-[#014952] transition flex items-center justify-center gap-2">
        <FaComments />
        Chat with Seller
      </button>

      {seller.phone && (
        <button className="w-full mt-4 border-2 border-[#002F34] text-[#002F34] py-3 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center justify-center gap-2">
          <FaPhoneAlt />
          Call {seller.phone}
        </button>
      )}

    </div>
  );
}