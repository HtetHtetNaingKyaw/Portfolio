import React from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const OwnerProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { account } = useAuth();

  return account ? children : <Navigate to={"/toOwner"} />;
};

export default OwnerProtectedRoute;
