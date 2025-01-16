import { createBrowserRouter } from "react-router-dom";
import Home from "../user/pages/Home";
import LayoutTwo from "../layout/LayoutTwo";
import OverView from "../user/pages/OverView";
import ThuqbaCommitte from "../user/pages/ThuqbaCommitte";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />, // Root element for "/"
  },
  {
    path: "/about",
    element: <LayoutTwo />, // Layout wrapper for "about" routes
    children: [
      {
        index: true, // Default route for "/about"
        element: <OverView />,
      },
      {
        path: "thuqba", // "/about/thuqba"
        element: <ThuqbaCommitte />,
      },
      {
        path: "overview", // "/about/overview"
        element: <OverView />,
      },
    ],
  },

//   {
//     path: "/contact",
//     element: <LayoutThree />, // Layout wrapper for "contact" route
//     children: [
//       {
//         index: true, // Default route for "/contact"
//         element: <Contact />,
//       },
//     ],
//   },
//   {
//     path: "/homead",
//     element: <AdminDashboard />, // Admin dashboard route
//   },
]);
