import { memo } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/Logo.svg";

const HeaderLogo = () => {
  return (
    <Link to="/" className="header-logo">
      <img
        src={logo}
        alt="Logo de la organizacion"
        className="header-logo__img"
      />
      <h1 className="header-logo__title">CESAGUA</h1>
    </Link>
  );
};

export default memo(HeaderLogo);
