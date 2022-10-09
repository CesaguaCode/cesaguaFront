import LoginInput from "../LoginPage/components/LoginInput";
import useRecover from "./useRecover";

import "./requestRecoverPage.scss";

const RequestRecoverPage = () => {

  const {handleSubmit, email, handleInput} =  useRecover()

  return (
    <section className="login-container">
      <form className="login-card" method="POST" onSubmit={handleSubmit}>
        <h2 className="recovery-title">Recuperar contraseña</h2>

        <LoginInput
          state={email}
          type="email"
          icon="i__user"
          label="Correo"
          handler={handleInput}
        ></LoginInput>

        <button className="btn login__btn-submit">Solicitar</button>

        <span className="recovery-detail">
          Ingrese su correo para enviarle un mensaje de recuperación.
        </span>
      </form>
    </section>
  );
};

export default RequestRecoverPage;