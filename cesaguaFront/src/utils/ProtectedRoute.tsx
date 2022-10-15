
import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../contexts/AuthContext";

export const ProtectedRoute = () => {
  // TODO: Verificar bien al usuario
  const {user} = useUser();
  
  return user && user.role === 0 ? <Navigate to="/" /> : <Outlet />;
};
