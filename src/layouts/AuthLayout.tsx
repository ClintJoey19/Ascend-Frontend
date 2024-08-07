import Logo from "@/components/global/Logo";
import AuthProvider from "@/providers/AuthProvider";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <AuthProvider>
      <main className="w-full max-w-[1220px] mx-auto h-screen flex items-center justify-center px-4 py-8">
        <section className="w-full max-w-[350px] bg-white rounded-xl p-4 shadow-sm flex items-center flex-col gap-4">
          <div className="mb-4">
            <Logo />
          </div>
          <Outlet />
        </section>
      </main>
    </AuthProvider>
  );
};

export default AuthLayout;
