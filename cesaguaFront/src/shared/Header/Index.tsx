import logo from "../../assets/images/Logo.svg";
import "./header.scss";

import links from "./links.json";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <section className="header-logo">
          <img
            src={logo}
            alt="Logo de la organizacion"
            className="header-logo__img"
          />
          <h1 className="header-logo__title">CESAGUA</h1>
        </section>

        <nav className="header-nav">
          {links.map(({ link, text }) => 
            <a key={text} className="header-nav__link" href={link}> {text} </a>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;