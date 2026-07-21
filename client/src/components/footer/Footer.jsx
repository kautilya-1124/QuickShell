import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white">

      <div className="max-w-7xl mx-auto px-5 py-12 grid md:grid-cols-4 gap-10">

        <div>
          <h2 className="text-2xl font-bold mb-4">
            QuickSell
          </h2>

          <p className="text-gray-400">
            India's modern marketplace for buying and selling anything.
          </p>
        </div>

        <div>
          <h3 className="font-bold mb-3">
            Company
          </h3>

          <ul className="space-y-2 text-gray-400">
            <li>About</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-3">
            Support
          </h3>

          <ul className="space-y-2 text-gray-400">
            <li>Help Center</li>
            <li>Privacy Policy</li>
            <li>Terms</li>
          </ul>
        </div>

        <div>

          <h3 className="font-bold mb-3">
            Follow Us
          </h3>

          <div className="flex gap-4 text-2xl">

            <FaFacebook/>
            <FaInstagram/>
            <FaTwitter/>
            <FaLinkedin/>

          </div>

        </div>

      </div>

      <div className="border-t border-gray-700 text-center py-5 text-gray-400">
        © 2026 QuickSell. All Rights Reserved.
      </div>

    </footer>
  );
}