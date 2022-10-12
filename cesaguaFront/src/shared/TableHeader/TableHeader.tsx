import { ChangeEventHandler, MouseEventHandler } from "react";

import "./tableHeader.scss"

interface props {
  title: string;
  search: string;
  handleSearch: ChangeEventHandler;
  handleAdd: MouseEventHandler;
}

const TableHeader = ({ title, search, handleSearch, handleAdd }: props) => {
  return (
    <header className="table-header">
      <h1 className="table-header__title">Gestión de {title}</h1>
      <div className="table-header__inputs-container">
        <div className="input-group">
          
          <input
            id="search"
            type="text"
            className="table-header__inputs-search"
            placeholder=" "
            value={search}
            onChange={handleSearch}
          />
          <label htmlFor="search" className="table-header__inputs-search-label">
            <span>
            Buscar
            </span>
          </label>
          <i className="ico i__search" />
        </div>

        <button className="btn add__button" onClick={handleAdd}>
          <i className="ico i__add" />
          Agregar
        </button>
        
      </div>
    </header>
  );
};

export default TableHeader;
