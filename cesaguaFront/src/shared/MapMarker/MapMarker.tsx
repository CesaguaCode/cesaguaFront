import { Marker, Popup } from "react-leaflet";
import { LatLngTuple, Icon } from "leaflet";

interface props {
  position: LatLngTuple | null;
  name: string;
  province: string;
  canton: string;
  district: string;
}

const MapMarker = ({ position, name, province, canton, district }: props) => {
  const icon = new Icon({
    iconUrl: "./marker.svg",
    iconSize: [25, 25],
  });

  return (
    position && (
      <Marker position={position} icon={icon}>
        <Popup>
          <b>{name}</b>
          <br /> {province}, {canton}, {district}
        </Popup>
      </Marker>
    )
  );
};

export default MapMarker;
