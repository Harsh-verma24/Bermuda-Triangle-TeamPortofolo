import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navbar, Footer } from "./components";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  About,
  Team,
  NotFound,
  Contact,
  Layout,
} from "./pages";
import { Harsh, Jatin, JatinKumar } from "./pages/teamMembers";
import { path } from "framer-motion/client";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      {
        path: "/team",
        element: <Team />,
        children: [
          {
            path: "harsh",
            element: <Harsh />,
          },
          {
            path: "jatin",
            element: <Jatin />,
          },
          {
            path: "jatinkumar",
            element: <JatinKumar />,
          },
        ],
      },
      { path: "/contact", element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
