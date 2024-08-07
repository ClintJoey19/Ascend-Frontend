import Footer from "@/components/global/Footer";
import Navbar from "@/components/global/Navbar";
import AuthProvider from "@/providers/AuthProvider";
import React from "react";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <AuthProvider>
      <main className="w-full flex flex-col">
        <Navbar />
        <div className="container pt-[8vh]">
          <Outlet />
        </div>
        <Footer />
      </main>
    </AuthProvider>
  );
};

export default HomeLayout;
