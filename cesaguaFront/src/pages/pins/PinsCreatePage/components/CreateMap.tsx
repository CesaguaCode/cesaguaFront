
import { LatLngTuple, marker } from 'leaflet';
import { useState } from 'react';
import PublicMap from '../../../../shared/PublicMap/PublicMap'

const CreateMap = () => {

    const START_POS: LatLngTuple = [10.18, -83.74];

    const [zoom, setZoom] = useState<any>(null);
    const [map, setMap] = useState<any>(null);
    const [newMarker, setNewMarker] = useState({
      position: null,
      name: "",
      province: "Limón",
      canton: "Pococí",
      district: "",
    });
  

  return (
    <PublicMap setMap={setMap} markers={[]}></PublicMap>
  )
}

export default CreateMap