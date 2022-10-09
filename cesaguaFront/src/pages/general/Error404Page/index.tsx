import { Link } from "react-router-dom";
import "./error404Page.scss";

const Error404Page = () => {
  return (
    <section className="page404-container">
      <div className="page404-detail">
        <p className="page404-question">¿Cómo has llegado hasta aquí?</p>
        <hr />
        <h2 className="page404-error">404</h2>
        <p className="page404-notfound">
          Sitio <b>no encontrado</b>
        </p>
        <hr />
        <Link className="page404-link" to="/">Ir al inicio</Link>
      </div>
      <img
        className="page404-img"
        src="/src/assets/images/char404.svg"
        alt="404 - Character"
      ></img>
    </section>
  );
};

export default Error404Page;
