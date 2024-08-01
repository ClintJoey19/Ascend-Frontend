import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Projects from "./pages/Projects.tsx";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import Project from "./pages/Project.tsx";
import Login from "./pages/Login.tsx";
import Signup from "./pages/Signup.tsx";
import Profile from "./pages/Profile.tsx";
import Messages from "./pages/Messages.tsx";
import Bookings from "./pages/Bookings.tsx";
import AgentProjects from "./pages/AgentProjects.tsx";
import NewProject from "./pages/NewProject.tsx";

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
    path: "auth/login",
    element: <Login />,
  },
  {
    path: "auth/sign-up",
    element: <Signup />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
  {
    path: "agent-projects",
    element: <AgentProjects />,
  },
  {
    path: "agent-projects/:projectId",
    element: <NewProject />,
  },
  {
    path: "messages",
    element: <Messages />,
  },
  {
    path: "bookings",
    element: <Bookings />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
