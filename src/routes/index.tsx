import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import withGlobals from "../hocs/withGlobals";
import Donation from "../pages/Donation";
import Donations from "../pages/Donations";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NewDonation from "../pages/NewDonation";
import Register from "../pages/Register";

const Routes: React.FC = () => {
  const router = createBrowserRouter([
    { path: "/", element: withGlobals(<Home />) },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/donations", element: withGlobals(<Donations />) },
    { path: "/donation/:id", element: withGlobals(<Donation />) },
    { path: "/new-donation", element: withGlobals(<NewDonation />) },
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
