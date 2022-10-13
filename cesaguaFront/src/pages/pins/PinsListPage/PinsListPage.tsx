import { ChangeEvent, useState } from "react";
import PublicMap from "../../../shared/PublicMap/PublicMap";
import "./PinsListPage.scss";

import markers from "./request.json";

const PinsListPage = () => {
  const [search, setSearch] = useState("");
  const [map, setMap] = useState<any>(null);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearch(query);
    const coincidences: any = markers.filter((marker) =>
      marker.name.toLowerCase().includes(query.toLowerCase())
    );

    if (query === "" || coincidences.length === 0) {
      goToIndex()
      return;
    }

    const searchedPin = coincidences[0];

    map.flyTo(searchedPin.position, 12);
  };

  const handleClear = () => {
    setSearch("");
    goToIndex()
  };

  const goToIndex = ()=> {
    map.flyTo([10.18, -83.74], 10);
  }

  return (
    <section className="pins-table">
      <header className="pins-table__head">
        <h1 className="pins-table__title">Mapa de influencia</h1>
        <div className="pins-inputs__container">
          <div className="input-group pins-input-group">
            <input
              id="search"
              type="text"
              className="pins-inputs__search"
              placeholder=" "
              onChange={handleInput}
              value={search}
              list="pins"
            />

            <label htmlFor="search" className="pins-inputs__search-label">
              <span>Buscar</span>
            </label>

            {
              <datalist id="pins">
                {markers.map(
                  (marker) =>
                    marker.name
                      .toLowerCase()
                      .includes(search.toLowerCase()) && (
                      <option key={marker.id}>{marker.name}</option>
                    )
                )}
              </datalist>
            }

            <button className="btn pins-btn__clear" onClick={handleClear} title="Eliminar filtro">
              <i className="ico i__clear" />
            </button>
          </div>
        </div>
      </header>

      <div className="pins-public__map">
        <PublicMap markers={markers} setMap={setMap} />
      </div>
    </section>
  );
};

export default PinsListPage;
