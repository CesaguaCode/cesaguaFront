import TableHeader from "../../../shared/TableHeader/TableHeader";
import usePins from "../usePins";
import PinTableRow from "./components/PinTableRow";

import "./pinsTablePage.scss";

const PinstTablePage = () => {

  const {pins,handleAdd, search, handleSearch, handleDelete, handleEdit}:any = usePins()

  return (
    <section className="pins-table__page">
      
      <TableHeader
        title="Sitios"
        search={search}
        handleSearch={handleSearch}
        handleAdd={handleAdd}
      ></TableHeader>

    <div  className="pins-table__wrapper">
    <table className="pins-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Provincia</th>
            <th>Cantón</th>
            <th>Distrito</th>
            <th>Ubicación</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
            {
                pins.map((pin:any)=> <PinTableRow key={pin.id} {...pin} handleDelete={handleDelete} handleEdit={handleEdit}></PinTableRow>)
            }
        </tbody>
      </table>
    </div>

    </section>
  );
};

export default PinstTablePage;
