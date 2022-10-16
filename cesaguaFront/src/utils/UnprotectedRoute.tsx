
import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../contexts/AuthContext";

export const UnprotectedRoute = () => {
  const { user } = useUser();
  return user.name ? <Navigate to="/" />  : <Outlet />;
};
