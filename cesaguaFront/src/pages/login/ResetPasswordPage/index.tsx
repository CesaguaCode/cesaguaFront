import LoginInput from "../LoginPage/components/LoginInput";
import useReset from "./useReset";
import jwt_decode from "jwt-decode";

import "./requestResetPage.scss";
import { useNavigate, useParams } from "react-router-dom";
import AlertSystem from "../../../utils/AlertSystem";
import { useEffect } from "react";

const ResetPasswordPage = () => {

  const navigate = useNavigate();

  const {handleSubmit, handleInput, loginData, validatedFields, setValidatedFields} = useReset();

  const {toastAlert} = AlertSystem();

  let {token} = useParams();
  token = token?.replaceAll("~",".");
  const userData: any = jwt_decode(token || "");

  
  const hasExpired = () => Date.now() > userData.exp * 1000;

  useEffect(() => {
    hasExpired();

    if(hasExpired()){
      toastAlert("Este vínculo ha expirado", "error")
      return navigate("/")
    }

    
  }, [])

  const validate = (e:any) => {
    e.preventDefault()
    
    setValidatedFields({password:!loginData.password,repassword:!loginData.repassword})

    if(!loginData.password){
      toastAlert("Debe ingresar una contraseña", "error");
      return
    }
    
    if( (loginData.password !== loginData.repassword)){
      toastAlert("Las contraseñas no coinciden", "error");
      return
    }

    // TODO: Validar envio, cambio y redireccionamiento
    console.log(userData.auth.id, loginData.password);
    
  }
  


  
  return (
    <section className="login-container">
      <form className="login-card" method="POST" onSubmit={validate}>
        <h2 className="recovery-title">Recuperar contraseña</h2>

        <LoginInput
          isInvalid = {validatedFields.password}
          state={loginData.password}
          type="password"
          icon="i__lock"
          label="Contraseña"
          handler={handleInput}
          name="password"
        ></LoginInput>

        <LoginInput
          isInvalid = {validatedFields.repassword}
          state={loginData.repassword}
          type="password"
          icon="i__lock"
          label="Repetir contraseña"
          handler={handleInput}
          name="repassword"
        ></LoginInput>

        <button className="btn login__btn-submit">Asignar</button>

        <span className="recovery-detail">
          Ingrese la nueva contraseña para su cuenta.
        </span>
      </form>
    </section>
  );
};

export default ResetPasswordPage;