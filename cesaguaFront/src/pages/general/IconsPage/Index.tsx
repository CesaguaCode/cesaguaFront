import "./iconsPage.scss";
import icons from "./icons.json";
/*
    Pagina general solo para mostrar los iconos actuales.
*/

const IconsPage = () => {
  return (
    <div className="icons-container">
      {icons.map((icon) => (
        <div key={icon} className="icon-card">
          <i className={`ico i__${icon}`}></i>
          <span> {`i__${icon}`} </span>
        </div>
      ))}
    </div>
  );
};

export default IconsPage;
