import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Navbar from "./components/global/Navbar.tsx";
import Footer from "./components/global/Footer.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <main className="w-full flex flex-col">
      <Navbar />
      <App />
      <Footer />
    </main>
  </React.StrictMode>
);
