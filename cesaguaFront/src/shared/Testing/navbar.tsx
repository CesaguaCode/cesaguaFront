import { Link } from "react-router-dom";
import HeaderLogo from "../Header/components/HeaderLogo";
import Header from "../Header/Index";

const NewNavbar = () => {
  return (
    // <nav className="navbar navbar-expand-md navbar-light bg-light">
    //   {/* <HeaderLogo></HeaderLogo> */}
    //   <Link to={"/"}>
    //     <i className="fa-solid fa-house"></i> Inicio
    //   </Link>

    //   <button
    //     className="navbar-toggler"
    //     type="button"
    //     data-toggle="collapse"
    //     data-target="#navbarNav"
    //   >
    //     <span className="navbar-toggler-icon"></span>
    //   </button>
    //   <div className="collapse navbar-collapse" id="navbarNav">
    //     <ul className="navbar-nav mr-auto">
    //       <li className="nav-item active">
    //         <a className="nav-link" href="#">
    //           {" "}
    //           <i className="fa-solid fa-calendar-plus"></i> Servicios
    //           <span className="sr-only">(current)</span>
    //         </a>
    //       </li>
    //       <li className="nav-item active">
    //         <a className="nav-link" href="/servicio/">
    //           <i className="fa-brands fa-hashnode"></i> Noticias
    //         </a>
    //       </li>
    //       <li className="nav-item active">
    //         <a className="nav-link" href="/reporte/">
    //           <i className="fa-brands fa-hashnode"></i> Cantacto
    //         </a>
    //       </li>
    //     </ul>

    //     {/* <div th:if="${client} != null">
    //       <div th:include="page/navigation_client"></div>
    //     </div> */}

    //     {/* <div th:unless="${client} != null">
    //       <ul className="navbar-nav">
    //         <li className="nav-item">
    //           <div>
    //             <a className="nav-link" th:href="@{/cuenta/iniciar_sesion}">
    //               {" "}
    //               <i className="fa-solid fa-arrow-right-to-bracket"></i>
    //               Ingresar
    //             </a>
    //           </div>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" th:href="@{/cuenta/registrar}">
    //             {" "}
    //             <i className="fa-solid fa-key"></i> Registrarse
    //           </a>
    //         </li>
    //       </ul>
    //     </div> */}
    //   </div>
    // </nav>

    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                {" "}
                <i className="fa-solid fa-calendar-plus"></i> Servicios
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/servicio/">
                <i className="fa-brands fa-hashnode"></i> Noticias
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/reporte/">
                <i className="fa-brands fa-hashnode"></i> Cantacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NewNavbar;
