export default function ProductDescription({ description }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mt-8">
      <h2 className="text-2xl font-bold text-[#002F34] mb-4">
        Description
      </h2>

      <p className="text-gray-700 leading-8 whitespace-pre-line">
        {description || "No description available."}
      </p>
    </div>
  );
}