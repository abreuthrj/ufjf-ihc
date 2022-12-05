import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/Auth";

const withMiddleware = (component: React.ReactNode) => {
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.token) {
      navigate("/login");
    }
  }, [auth.token]);

  return <>{component}</>;
};

export default withMiddleware;
