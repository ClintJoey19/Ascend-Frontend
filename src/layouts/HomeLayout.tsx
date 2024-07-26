import Footer from "@/components/global/Footer";
import Navbar from "@/components/global/Navbar";
import React from "react";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-full flex flex-col">
      <Navbar />
      <div className="container pt-[8vh]">{children}</div>
      <Footer />
    </main>
  );
};

export default HomeLayout;
