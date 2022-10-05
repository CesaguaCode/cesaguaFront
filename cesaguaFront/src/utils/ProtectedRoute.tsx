
import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../contexts/AuthContext";

export const ProtectedRoute = () => {
  // TODO: Verificar bien al usuario
  const {user} = useUser();
  
  return user ? <Outlet /> : <Navigate to="/" />;
};
