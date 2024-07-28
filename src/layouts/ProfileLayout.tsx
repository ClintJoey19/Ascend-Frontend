import BottomBar from "@/components/profile/BottomBar";
import Sidebar from "@/components/profile/Sidebar";
import React from "react";

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex py-4 px-4 gap-4">
      <Sidebar />
      <div className="w-full bg-white rounded-xl shadow-sm p-4">{children}</div>
      <BottomBar />
    </section>
  );
};

export default ProfileLayout;
