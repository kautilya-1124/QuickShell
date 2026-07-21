import { Link, useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaPlus,
  FaCamera,
} from "react-icons/fa";

import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold text-[#002F34]"
        >
          QuickSell
        </Link>

        {/* Location */}
        <div className="hidden md:flex items-center gap-2 border rounded-lg px-3 py-2">
          <FaMapMarkerAlt />
          <span>India</span>
        </div>

        {/* Search */}
        <div className="flex-1 mx-6 hidden md:block">
          <div className="flex">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full border rounded-l-lg px-4 py-2 outline-none"
            />

            <button className="bg-[#002F34] text-white px-5 rounded-r-lg">
              <FaSearch />
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {user ? (
            <>
              <span className="font-semibold text-[#002F34]">
                Hi, {user.name}
              </span>

              <Link
                to="/profile"
                className="font-medium hover:text-blue-600"
              >
                Profile
              </Link>

              <button
                onClick={handleLogout}
                className="font-medium text-red-600 hover:text-red-700"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="font-medium hover:text-blue-600"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="font-medium hover:text-blue-600"
              >
                Register
              </Link>
            </>
          )}

          <Link
            to="/create-ad"
            className="bg-yellow-400 px-5 py-2 rounded-full flex items-center gap-2 font-semibold hover:scale-105 duration-200"
          >
            <FaCamera />
            Sell
            <FaPlus size={12} />
          </Link>

        </div>

      </div>
    </header>
  );
}