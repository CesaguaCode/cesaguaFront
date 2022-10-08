import React, { ChangeEventHandler, MouseEventHandler } from "react";

interface props {
  title: string;
  search: string;
  handleSearch: ChangeEventHandler;
  handleAdd: MouseEventHandler;
}

const TableHeader = ({ title, search, handleSearch, handleAdd }: props) => {
  return (
    <header className="milestones-table__head">
      <h1>Gestión de {title}</h1>
      <div className="milestones-inputs__container">
        <div className="input-group">
          <input
            id="search"
            type="text"
            className="milestones-inputs__search"
            placeholder=" "
            value={search}
            onChange={handleSearch}
          />
          <label htmlFor="search" className="milestones-inputs__search-label">
            <span>
              <i className="ico i__search" /> Buscar
            </span>
          </label>
        </div>

        <button className="btn add__button" onClick={handleAdd}>
          {" "}
          <i className="ico i__add" />
          Agregar
        </button>
      </div>
    </header>
  );
};

export default TableHeader;
