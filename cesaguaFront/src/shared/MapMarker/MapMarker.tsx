import { Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import { memo, useEffect, useState } from "react";
import svg from "../../assets/images/marker.svg"

interface props {
  position: any;
  name: string;
  province: string;
  canton: string;
  district: string;
}

const MapMarker = ({ position, name, province, canton, district }: props) => {
  const icon = new Icon({
    iconUrl: svg,
    iconSize: [25, 25],
  });

  

  return (
    position && (
      <Marker position={position} icon={icon}>
        <Popup>
          <b>{name || "Sin nombre"}</b>
          <br /> {province}, {canton}, {district}
        </Popup>
      </Marker>
    )
  );
};

export default memo(MapMarker);
