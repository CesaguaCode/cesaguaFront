import { memo } from "react";
import { Link } from "react-router-dom";
import HeaderLogo from "./components/HeaderLogo";

import "./header.scss";

import links from "./links.json";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <HeaderLogo></HeaderLogo>

        <nav className="header-nav">
          {links.map(({ link, text }) => 
            <Link key={text} className="header-nav__link" to={link}> {text} </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;