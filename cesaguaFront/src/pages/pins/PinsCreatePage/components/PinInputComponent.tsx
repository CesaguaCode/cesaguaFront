import { useCallback } from "react";
import provinces from "../../Data/provinces.json";
import cantons from "../../Data/cantons.json";
import districts from "../../Data/districts.json";

const PinInputComponent = ({
  newMarker,
  setNewMarker,
  setZoom,
  handleName,
}: any) => {
  const handleAddress = useCallback(
    (e: any) => {
      if (e.target.name === "province") {
        setNewMarker((previous: any) => {
          return {
            ...previous,
            province: e.target.value,
            canton: (cantons as any)[e.target.value][0],
            district: "",
          };
        });

        setZoom(9);
      }

      if (e.target.name === "canton") {
        setNewMarker((previous: any) => {
          return {
            ...previous,
            canton: e.target.value,
            district: "",
          };
        });

        setZoom(11);
      }

      if (e.target.name === "district") {
        setZoom(15);
      }
    },
    [newMarker]
  );

  return (
    <div className="pin-inputs__container">
      <h3 className="pin-inputs__subtitle">Datos del sitio</h3>

      <div className="input-group">
        <label htmlFor=""> Nombre</label>
        <input type="text" value={newMarker.name} onInput={handleName} />
      </div>

      <div className="input-group">
        <label htmlFor=""> Latitud</label>
        <input
          type="text"
          value={
            newMarker.position ? newMarker.position.lat.toFixed(3) : 10.181
          }
          disabled
        />
      </div>

      <div className="input-group">
        <label htmlFor=""> Longitud</label>
        <input
          type="text"
          value={
            newMarker.position ? newMarker.position.lng.toFixed(3) : -83.741
          }
          disabled
        />
      </div>

      <div className="input-group">
        <label htmlFor=""> Provincia</label>
        <select
          name="province"
          id="province"
          onInput={handleAddress}
          value={newMarker.province}
        >
          {provinces.map((province: any) => (
            <option key={province} value={province}>
              {province}
            </option>
          ))}
        </select>
      </div>

      <div className="input-group">
        <label htmlFor=""> Cantón</label>
        <select
          name="canton"
          id="canton"
          onInput={handleAddress}
          value={newMarker.canton}
        >
          {(cantons as any)[newMarker.province].map((canton: any) => (
            <option key={canton} value={canton}>
              {canton}
            </option>
          ))}
        </select>
      </div>

      <div className="input-group">
        <label htmlFor=""> Distrito</label>
        <select name="district" id="district">
          {(districts as any)[newMarker.province][newMarker.canton].map(
            (district: any) => (
              <option key={district} value={district}>
                {district}
              </option>
            )
          )}
        </select>
      </div>

      <div className="buttons-container">

      <button className="btn btn-cancel">
          Cancelar
        </button>
        <button className="btn btn-save">
          Guardar
        </button>

      </div>
    </div>
  );
};

export default PinInputComponent;
