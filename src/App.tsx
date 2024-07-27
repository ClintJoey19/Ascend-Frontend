import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Projects from "./pages/Projects.tsx";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import Agents from "./pages/Agents.tsx";
import Project from "./pages/Project.tsx";
import Login from "./pages/Login.tsx";
import Signup from "./pages/Signup.tsx";

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
  {
    path: "auth/login",
    element: <Login />,
  },
  {
    path: "auth/sign-up",
    element: <Signup />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
