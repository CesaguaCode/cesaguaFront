import { useCallback } from "react";
import cantons from "../../data/cantons.json";
import districts from "../../data/districts.json";
import provinces from "../../data/provinces.json";

interface props {
  newMarker: any;
  setNewMarker: any;
  setZoom: any;
}

const usePinInputComponent = ({ newMarker, setNewMarker, setZoom }: props) => {
  const { name, position, province, canton, district } = newMarker;

  const posInput = [
    { label: "Latitud", value: position ? position.lat.toFixed(3) : 0 },
    { label: "Longitud", value: position ? position.lng.toFixed(3) : 0 },
  ];

  const selectInput = [
    {
      label: "Provincia",
      name: "province",
      value: province,
      childrens: provinces,
    },
    {
      label: "Cantón",
      name: "canton",
      value: canton,
      childrens: (cantons as any)[province],
    },
    {
      label: "Distrito",
      name: "district",
      value: district,
      childrens: (districts as any)[province][canton],
    },
  ];

  const handleAddress = useCallback(
    (e: any) => {
      if (e.target.name === "province") {
        setNewMarker((previous: any) => {
          return {
            ...previous,
            province: e.target.value,
            canton: (cantons as any)[e.target.value][0],
            district: (districts as any)[e.target.value][
              (cantons as any)[e.target.value][0]
            ][0],
          };
        });

        setZoom(11);
        
      }

      if (e.target.name === "canton") {
        setNewMarker((previous: any) => {
          return {
            ...previous,
            canton: e.target.value,
            district: (districts as any)[previous.province][e.target.value][0],
          };
        });

        setZoom(13);
      }

      if (e.target.name === "district") {
        setNewMarker((previous: any) => {
          return {
            ...previous,
            district: e.target.value,
          };
        });

        setZoom(15);
      }
    },
    [newMarker.canton, newMarker.province, newMarker.district]
  );

  return { handleAddress, posInput, selectInput };
};

export default usePinInputComponent;
