import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import {useUser} from "../contexts/AuthContext"

const AdminGuard = () => {
  const { user } = useUser();
  const navigate = useNavigate()

  useEffect(() => {
    if ( user.rol === undefined ) return;
    if ( user.rol === 0){
      navigate("/login")
    }
  }, [user])
  
  return <Outlet></Outlet>;
};

export default AdminGuard;
