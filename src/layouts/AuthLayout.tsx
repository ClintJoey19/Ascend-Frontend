import Logo from "@/components/global/Logo";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-full max-w-[1220px] mx-auto h-screen flex items-center justify-center px-4 py-8">
      <section className="w-full max-w-[350px] bg-white rounded-xl p-4 shadow-sm flex items-center flex-col gap-4">
        <div className="mb-4">
          <Logo />
        </div>
        {children}
      </section>
    </main>
  );
};

export default AuthLayout;
