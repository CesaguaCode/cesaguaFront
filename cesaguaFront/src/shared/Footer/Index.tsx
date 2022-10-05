import "./footer.scss";

import links from "./links.json"

const Footer = () => {
  
  return (
    <header className="footer">
      <nav className="footer-nav">
        {links.map(({ link, text }) => 
          <a key={text} className="footer-nav__link" href={link}> {text} </a>
        )}
      </nav>
    </header>
  );
};

export default Footer;
