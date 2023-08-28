import { Outlet } from "react-router-dom";

import AppBar from "./layouts/AppBar";
import HomePage from "./pages/HomePage";

export default [
  {
    path: "/",
    element: <AppBar />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ":testingName",
        element: <div>Sub Navbar with testing name</div>,
      },
    ],
  },
];
