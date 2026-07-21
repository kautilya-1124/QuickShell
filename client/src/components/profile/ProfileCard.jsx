import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaUserEdit,
  FaCalendarAlt,
} from "react-icons/fa";

export default function ProfileCard({ onEdit, refresh }) {
  const [user, setUser] = useState(null);

  const fetchProfile = useCallback(async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:5000/api/auth/profile",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setUser(res.data.user);

      // LocalStorage bhi update rahe
      localStorage.setItem("user", JSON.stringify(res.data.user));

    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile, refresh]);

  if (!user) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
        <div className="animate-pulse">
          <div className="w-28 h-28 rounded-full bg-gray-300 mx-auto"></div>
          <div className="h-6 bg-gray-300 rounded mt-5"></div>
          <div className="h-4 bg-gray-200 rounded mt-3"></div>
        </div>
      </div>
    );
  }

  const memberSince = new Date(user.createdAt).toLocaleDateString("en-IN", {
    month: "long",
    year: "numeric",
  });

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

      <div className="h-28 bg-gradient-to-r from-[#002F34] to-[#0b6b73]"></div>

      <div className="px-6 pb-6">

        <div className="-mt-14 flex flex-col items-center">

          <img
            src={
              user.profileImage ||
              "https://cdn-icons-png.flaticon.com/512/149/149071.png"
            }
            alt="Profile"
            className="w-28 h-28 rounded-full border-4 border-white object-cover shadow-lg"
          />

          <h2 className="mt-4 text-2xl font-bold text-[#002F34]">
            {user.name}
          </h2>

          <p className="text-gray-500">
            QuickSell Member
          </p>

        </div>

        <div className="mt-8 space-y-5">

          <div className="flex items-center gap-3">
            <FaEnvelope className="text-[#002F34]" />
            <span>{user.email}</span>
          </div>

          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-[#002F34]" />
            <span>{user.phone || "Not Added"}</span>
          </div>

          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-[#002F34]" />
            <span>{user.city || "Not Added"}</span>
          </div>

          <div className="flex items-center gap-3">
            <FaCalendarAlt className="text-[#002F34]" />
            <span>Member Since {memberSince}</span>
          </div>

        </div>

        <button
          onClick={onEdit}
          className="w-full mt-8 bg-[#002F34] hover:bg-[#01464d] text-white py-3 rounded-xl flex items-center justify-center gap-2 transition"
        >
          <FaUserEdit />
          Edit Profile
        </button>

      </div>
    </div>
  );
}