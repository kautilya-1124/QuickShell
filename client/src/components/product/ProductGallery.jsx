import { useState } from "react";

export default function ProductGallery({ image, title }) {
  const [selectedImage, setSelectedImage] = useState(
    image || "https://via.placeholder.com/800x600?text=No+Image"
  );

  // Future me multiple images yahan aa jayengi
  const images = [
    image || "https://via.placeholder.com/800x600?text=No+Image",
    image || "https://via.placeholder.com/800x600?text=No+Image",
    image || "https://via.placeholder.com/800x600?text=No+Image",
    image || "https://via.placeholder.com/800x600?text=No+Image",
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-5">

      {/* Main Image */}
      <div className="overflow-hidden rounded-xl">
        <img
          src={selectedImage}
          alt={title}
          className="w-full h-[500px] object-cover hover:scale-105 duration-300"
        />
      </div>

      {/* Thumbnail Images */}
      <div className="grid grid-cols-4 gap-3 mt-5">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="thumb"
            onClick={() => setSelectedImage(img)}
            className={`h-24 w-full object-cover rounded-lg cursor-pointer border-2 transition ${
              selectedImage === img
                ? "border-blue-600"
                : "border-gray-200 hover:border-blue-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}