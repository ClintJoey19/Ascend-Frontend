import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Projects from "./pages/Projects.tsx";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import Agents from "./pages/Agents.tsx";
import Project from "./pages/Project.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "projects",
    element: <Projects />,
  },
  {
    path: "projects/:id",
    element: <Project />,
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
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
