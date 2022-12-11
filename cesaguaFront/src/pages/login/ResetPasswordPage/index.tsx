import LoginInput from "../LoginPage/components/LoginInput";
import useReset from "./useReset";

import "./requestResetPage.scss";

const ResetPasswordPage = () => {

  const { validatedFields, loginData, handleSubmit, handleInput } = useReset()

  const inputs = [
    { isInvalid:validatedFields.password, state:loginData.password, type:"password", icon:"i__lock", label:"Contraseña", handler:handleInput,  name:"password"},
    { isInvalid:validatedFields.repassword, state:loginData.repassword, type:"password", icon:"i__lock", label:"Repetir contraseña", handler:handleInput,  name:"repassword"} 
  ]
  
  return (
    <section className="login-container">
      <form className="login-card" method="POST" onSubmit={handleSubmit}>
        <h2 className="recovery-title">Recuperar contraseña</h2>

        { inputs.map((input)=> <LoginInput {...input}></LoginInput>) }

        <button className="btn login__btn-submit">Asignar</button>

        <span className="recovery-detail">
          Ingrese la nueva contraseña para su cuenta.
        </span>
      </form>
    </section>
  );
};

export default ResetPasswordPage;