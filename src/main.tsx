import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./components/global/Navbar.tsx";
import Footer from "./components/global/Footer.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Projects from "./pages/Projects.tsx";
import Home from "./pages/Home.tsx";
import App from "./App.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import Agents from "./pages/Agents.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "about-us",
        element: <About />,
      },
      {
        path: "contact-us",
        element: <Contact />,
      },
      {
        path: "agents",
        element: <Agents />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
