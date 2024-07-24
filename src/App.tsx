import Navbar from "./components/global/Navbar";
import Footer from "./components/global/Footer";
import { Outlet } from "react-router-dom";
import HomeLayout from "@/layouts/HomeLayout";

const App = () => {
  return (
    <main className="w-full flex flex-col">
      <Navbar />
      <HomeLayout>
        <Outlet />
      </HomeLayout>
      <Footer />
    </main>
  );
};

export default App;
