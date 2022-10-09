import { Link } from "react-router-dom";
import LoginInput from "./components/LoginInput";
import useLogin from "./useLogin";

import "./loginPage.scss";

const LoginPage = () => {
  const { handleSubmit, handleInput, loginData } = useLogin();

  return (
    <>
      <section className="login-container">
        <form className="login-card" onSubmit={handleSubmit} method="POST">
          <h2 className="login-title">Iniciar sesión</h2>

          <LoginInput
            state={loginData.email}
            type="email"
            icon="i__user"
            label="Correo"
            handler={handleInput}
          ></LoginInput>

          <LoginInput
            state={loginData.password}
            type="password"
            icon="i__lock"
            label="Contraseña"
            handler={handleInput}
          ></LoginInput>

          <button className="btn login__btn-submit">Ingresar</button>
          <hr className="login-hr" />
          <span> ¿No recueda su contraseña? </span>
          <Link to={"/recover"} className="btn login__btn-recover">
            Solicitar recuperación.
          </Link>
        </form>
      </section>

      <div className="waves wave2"></div>
      <div className="waves wave3"></div>
      <div className="waves wave1"></div>
    </>
  );
};

export default LoginPage;
