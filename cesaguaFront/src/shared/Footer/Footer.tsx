import "./footer.scss";

const Footer = () => {
  const links = [
    { link: "#", text: "Servicios" },
    { link: "#", text: "Noticias" },
    { link: "#", text: "Mapa de sitio" },
    { link: "#", text: "Contacto" },
  ];

  return (
    <header className="footer">
      <nav className="footer-nav">
        {links.map(({ link, text }) => (
          <a key={text} className="footer-nav__link" href={link}>
            {text}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Footer;
