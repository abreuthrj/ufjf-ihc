import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { AuthProvider } from "./contexts/Auth";
import { StoreProvider } from "./contexts/Store";
import "./main.css";
import Routes from "./routes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <StoreProvider>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </StoreProvider>
    <ToastContainer />
  </React.StrictMode>
);
