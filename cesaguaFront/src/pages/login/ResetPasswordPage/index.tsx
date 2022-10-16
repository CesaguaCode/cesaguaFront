import LoginInput from "../LoginPage/components/LoginInput";
import useReset from "./useReset";
import jwt_decode from "jwt-decode";

import "./requestResetPage.scss";
import { useNavigate, useParams } from "react-router-dom";
import AlertSystem from "../../../utils/AlertSystem";

const ResetPasswordPage = () => {

  const navigate = useNavigate();

  const {handleSubmit, handleInput, loginData, validatedFields} = useReset();

  const {toastAlert} = AlertSystem();

  let {token} = useParams();
  token = token?.replaceAll("~",".");
  const userData: any = jwt_decode(token || "");

  console.log(userData);



  if (Date.now() >= userData.exp * 1000) {
    console.log("Expired Token");
    toastAlert("Este vínculo ha expirado", "error")
    navigate("/")
  }
  
  

  return (
    <section className="login-container">
      <form className="login-card" method="POST" onSubmit={handleSubmit}>
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