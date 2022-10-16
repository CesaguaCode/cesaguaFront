
import { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useUser } from "../contexts/AuthContext";

export const ProtectedRoute = () => {
  const { user } = useUser();
  return <Outlet />;
};
