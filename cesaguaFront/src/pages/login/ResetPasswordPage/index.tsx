import LoginInput from "../LoginPage/components/LoginInput";
import useReset from "./useReset";

import "./requestResetPage.scss";

const ResetPasswordPage = () => {
  const {handleSubmit, handleInput, loginData} = useReset();

  return (
    <section className="login-container">
      <form className="login-card" method="POST" onSubmit={handleSubmit}>
        <h2 className="recovery-title">Recuperar contraseña</h2>

        <LoginInput
          state={loginData.password}
          type="password"
          icon="i__lock"
          label="Contraseña"
          handler={handleInput}
          name="password"
        ></LoginInput>

        <LoginInput
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