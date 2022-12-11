import { FormEvent, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import AlertSystem from "../../../utils/AlertSystem";
import { useEffect } from "react";
import loginService from "../loginService";
import jwt_decode from "jwt-decode";

const useReset = () => {
  
  const [loginData, setloginData] = useState({ password: "", repassword: "" });
  const [validatedFields, setValidatedFields] = useState({password:false, repassword:false});
  const navigate = useNavigate();
  const {toastAlert} = AlertSystem();
  const service = loginService()

  let {token} = useParams();
  token = token?.replaceAll("~",".");
  const userData: any = jwt_decode(token || "");
  
  const hasExpired = () => Date.now() > userData.exp * 1000;

  const handleInput = (e: any) => {

    setValidatedFields((previous) => {
      return { ...previous, [e.target.name]: e.target.value === "" };
    });

    setloginData((previous) => {
      return { ...previous, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault()
    
    setValidatedFields({password:!loginData.password,repassword:!loginData.repassword})

    if(!loginData.password){
      return toastAlert("Debe ingresar una contraseña", "error");
    }
    
    if( (loginData.password !== loginData.repassword)){
      return toastAlert("Las contraseñas no coinciden", "error");
    }

    if( (loginData.password.length < 6)){
      return toastAlert("La contraseña es muy corta", "error");
    }

    const resetResponse = await service.resetPassword(userData.auth.id, loginData.password)

    if(resetResponse.status !== 200){
      return toastAlert("Surgió un error, intentelo mas tarde", "error");
    }
    
    toastAlert("Se asignó exitosamente", "success");
    navigate("/login")
    
  }

  useEffect(() => {
    
    if(hasExpired()){
      toastAlert("Este vínculo ha expirado", "error")
      return navigate("/")
    }

  }, [])

  return { validatedFields, loginData, handleSubmit, handleInput };
};

export default useReset;
