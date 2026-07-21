import { useState } from "react";

import Navbar from "../components/navbar/Navbar";
import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileCard from "../components/profile/ProfileCard";
import ProfileStats from "../components/profile/ProfileStats";
import AccountMenu from "../components/profile/AccountMenu";
import MyAds from "../components/profile/MyAds";
import Footer from "../components/footer/Footer";
import EditProfileModal from "../components/profile/EditProfileModal";
export default function Profile() {
  const [showEdit, setShowEdit] = useState(false);
const [refresh, setRefresh] = useState(false);
  return (
    <>
      <Navbar />

      <ProfileHeader />

      <div className="max-w-7xl mx-auto px-5 py-10 grid lg:grid-cols-3 gap-8">

        <div>
         <ProfileCard
  refresh={refresh}
  onEdit={() => setShowEdit(true)}
/>

          <AccountMenu />
        </div>

        <div className="lg:col-span-2">
          <ProfileStats />
          <MyAds />
        </div>

      </div>

      {/* Edit Profile Modal */}

      <EditProfileModal
  show={showEdit}
  onClose={() => setShowEdit(false)}
  onUpdated={() => setRefresh(!refresh)}
/>

      <Footer />
    </>
  );
}