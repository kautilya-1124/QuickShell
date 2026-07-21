export default function Hero() {
  return (
    <section className="bg-gray-100 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-2 items-center gap-10">

        {/* Left */}
        <div>

          <h1 className="text-5xl md:text-6xl font-bold text-[#002F34] leading-tight">
            Buy & Sell
            <br />
            Anything,
            <br />
            Anywhere
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            India's leading marketplace where millions buy and sell
            cars, mobiles, furniture, electronics and much more.
          </p>

          <div className="mt-8 flex gap-4">

            <button className="bg-[#002F34] text-white px-8 py-3 rounded-lg hover:bg-[#01464d] duration-300">
              Explore
            </button>

            <button className="border-2 border-[#002F34] text-[#002F34] px-8 py-3 rounded-lg hover:bg-[#002F34] hover:text-white duration-300">
              Sell Now
            </button>

          </div>

        </div>

        {/* Right */}
        <div className="flex justify-center">

          <img
            src="https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_f47a64c2b0_7bb6018f63b91145.png"
            alt="Hero"
            className="max-w-lg w-full"
          />

        </div>

      </div>
    </section>
  );
}