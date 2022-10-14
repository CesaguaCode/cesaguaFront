import { useCallback, useEffect, useState } from "react";
import { NominatimJS as nominatim } from "nominatim-js";

interface props {
  newMarker: any;
  setNewMarker: any;
  mapState: any;
}
const useCreateMap = ({ newMarker, setNewMarker, mapState }: props) => {

  const [zoom, setZoom] = useState<any>(null);
  const [map, setMap] = mapState;

  const handleName = useCallback((e: any) => {
    setNewMarker((previous: any) => {
      return {
        ...previous,
        name: e.target.value,
      };
    });
  }, []);

  useEffect(() => {
    if (map) {
      nominatim
        .search({
          q: ` ${newMarker.district},Cantón ${newMarker.canton}, Provincia ${newMarker.province}, Costa Rica`,
        })
        .then((results: any) => {
          const { lat, lon } = results[0];
          map.flyTo([lat, lon], zoom);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [newMarker.canton, newMarker.province, newMarker.district]);

  return { setMap, newMarker, setNewMarker, setZoom, handleName };
};

export default useCreateMap;
