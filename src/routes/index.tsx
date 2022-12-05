import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import withGlobals from "../hocs/withGlobals";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const Routes: React.FC = () => {
  const router = createBrowserRouter([
    { path: "/", element: withGlobals(<Home />) },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
