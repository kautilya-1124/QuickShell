export default function AccountMenu() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
      <h2 className="text-xl font-bold mb-4">Account Menu</h2>

      <button className="w-full bg-[#002F34] text-white py-3 rounded-lg">
        Edit Profile
      </button>

      <button className="w-full mt-3 border border-red-500 text-red-500 py-3 rounded-lg">
        Logout
      </button>
    </div>
  );
}