import { LatLngTuple, marker } from "leaflet";
import { useCallback, useEffect, useState } from "react";
import PublicMap from "../../../../shared/PublicMap/PublicMap";

import MapMarker from "../../../../shared/MapMarker/MapMarker";
import ClickComponent from "./ClickComponent";
import PinInputComponent from "./PinInputComponent";

const CreateMap = () => {
  const START_POS: LatLngTuple = [10.18, -83.74];

  const [zoom, setZoom] = useState<any>(null);
  const [map, setMap] = useState<any>(null);
  const [newMarker, setNewMarker] = useState({
    position: null,
    name: "",
    province: "Limón",
    canton: "Pococí",
    district: "Guápiles",
  });

  const handleName = (e: any) => {
    setNewMarker((previous) => {
      return {
        ...previous,
        name: e.target.value,
      };
    });
  };

  return (
    <section className="map-creation__section">
      <PublicMap
        setMap={setMap}
        markers={[]}
        extras={
          <>
            <MapMarker key={newMarker.name} {...newMarker}></MapMarker>
            <ClickComponent setClicked={setNewMarker}></ClickComponent>
          </>
        }
      ></PublicMap>

        <PinInputComponent newMarker={newMarker} setNewMarker={setNewMarker} setZoom={setZoom} handleName={handleName}></PinInputComponent>

     
    </section>
  );
};

export default CreateMap;
