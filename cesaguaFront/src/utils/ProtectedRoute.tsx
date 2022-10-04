
import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../contexts/AuthContext";

interface props {
  children?: JSX.Element;
}

export const ProtectedRoute = () => {
  const {user} = useUser();
  console.log(JSON.stringify(user));
  
  return user ? <Outlet /> : <Navigate to="/" />;
};
