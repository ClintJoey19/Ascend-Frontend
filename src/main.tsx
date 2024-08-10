import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./cloudinary.d.ts";
import App from "./App";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <Toaster />
  </React.StrictMode>
);
