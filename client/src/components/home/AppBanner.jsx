import { FaApple, FaGooglePlay } from "react-icons/fa";

export default function AppBanner() {
  return (
    <section className="bg-[#002F34] text-white py-16">
      <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-2 gap-10 items-center">

        <div>
          <h2 className="text-4xl font-bold">
            Get the QuickSell App
          </h2>

          <p className="mt-5 text-gray-300">
            Buy and sell anything directly from your mobile.
          </p>

          <div className="flex gap-4 mt-8">

            <button className="bg-black px-6 py-3 rounded-lg flex items-center gap-3">
              <FaApple size={25}/>
              App Store
            </button>

            <button className="bg-black px-6 py-3 rounded-lg flex items-center gap-3">
              <FaGooglePlay size={22}/>
              Google Play
            </button>

          </div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800"
          alt="app"
          className="rounded-xl shadow-lg"
        />

      </div>
    </section>
  );
}