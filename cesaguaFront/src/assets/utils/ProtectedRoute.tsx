import React from "react";
import { Navigate, Outlet } from "react-router-dom";

interface props {
  children?: JSX.Element;
}

export const ProtectedRoute = () => {
  const user = true;
  return user ? <Outlet /> : <Navigate to="/" />;
};
