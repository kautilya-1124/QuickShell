import {
  FaCar,
  FaMobileAlt,
  FaLaptop,
  FaCouch,
  FaTshirt,
  FaBook,
  FaFootballBall,
  FaBriefcase,
  FaHome,
  FaTools,
  FaPaw,
  FaMotorcycle,
} from "react-icons/fa";

const categories = [
  { name: "Cars", icon: <FaCar /> },
  { name: "Motorcycles", icon: <FaMotorcycle /> },
  { name: "Mobiles", icon: <FaMobileAlt /> },
  { name: "Electronics", icon: <FaLaptop /> },
  { name: "Furniture", icon: <FaCouch /> },
  { name: "Fashion", icon: <FaTshirt /> },
  { name: "Books", icon: <FaBook /> },
  { name: "Sports", icon: <FaFootballBall /> },
  { name: "Jobs", icon: <FaBriefcase /> },
  { name: "Real Estate", icon: <FaHome /> },
  { name: "Services", icon: <FaTools /> },
  { name: "Pets", icon: <FaPaw /> },
];

export default function Categories() {
  return (
    <section className="py-16 bg-white">

      <div className="max-w-7xl mx-auto px-5">

        <h2 className="text-3xl font-bold text-[#002F34] mb-10">
          Browse Categories
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">

          {categories.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow hover:shadow-lg duration-300 p-6 cursor-pointer border hover:border-[#23E5DB] flex flex-col items-center"
            >
              <div className="text-4xl text-[#23E5DB] mb-4">
                {item.icon}
              </div>

              <h3 className="font-semibold text-center">
                {item.name}
              </h3>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}