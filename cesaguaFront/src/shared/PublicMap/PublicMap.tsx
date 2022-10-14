import { LatLngTuple } from "leaflet";
import { memo, useMemo } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import MapMarker from "../MapMarker/MapMarker";
import "./publicMap.scss";

interface props {
  extras?: JSX.Element;
  markers?: any;
  setMap?: any;
  center?:LatLngTuple;
}

const PublicMap = ({ extras, setMap, markers, center }: props) => {
  const START_POS: LatLngTuple = [10.18, -83.74];

  const mapConfig = {
    center: START_POS,
    zoom: 10,
    minZoom: 9,
    maxZoom: 18,
    maxBounds: [
      [6.88, -87.5],
      [12.18, -81.5],
    ],
  };

  return (
    <div>
      <MapContainer {...(mapConfig as any)} ref={setMap}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {markers.map((marker: any) => (
          <MapMarker key={marker.id} {...marker}></MapMarker>
        ))}

        {extras}
      </MapContainer>
    </div>
  );
};

export default memo(PublicMap);
