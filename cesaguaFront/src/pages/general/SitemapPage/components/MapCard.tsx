import { memo } from "react";

interface props{
    title:string, 
    icon:string
}

const MapCard = ({title, icon}:props) => {

  return (
    <div className="map-card">
      <i className={`ico ${icon} card-icon`} />
      <h1>{title}</h1>
    </div>
  );
};

export default memo(MapCard);
