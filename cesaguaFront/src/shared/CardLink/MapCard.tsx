import { memo } from "react";
import { Link } from "react-router-dom";

interface props{
    title:string, 
    icon:string,
    link:string
}

const MapCard = ({title, icon, link}:props) => {
  
  return (
    <Link to={link} className="map-card animate__animated animate__fadeInDown">
      <i className={`ico ${icon} card-icon`} />
      <h5 className="p-3">{title}</h5>
    </Link>
  );
};

export default memo(MapCard);
