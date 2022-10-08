import { useEffect, useState } from "react";
import useAlert from "../../../shared/CustomAlert/useCustomAlert";
import Alert from "../../../shared/CustomAlert/CustomAlert";
import MilestoneCard from "./components/MilestoneCard";
import TableHeader from "./components/TableHeader";
import "./MilestonesTablePage.scss";

import milestoneRequest from "./request.json";

const MilestonesTablePage = () => {
  const alert: any = useAlert();
  const [search, setSearch] = useState("");
  const [milestones, setMilestones] = useState(milestoneRequest as Array<any>);

  useEffect(() => {
    setMilestones(
      (milestoneRequest as any).filter((milestone: any) =>
        milestone.title.includes(search)
      )
    );
  }, [search]);

  const handleAdd = () => {
    console.log("Agregando");
  };

  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };

  const handleCard = (e: any) => {
    e.currentTarget.name === "edit"
      ? handleEdit(e.currentTarget.id)
      : handleDelete(e.currentTarget.id);
  };

  const handleDelete = (id: number) => {
    alert.launch(
      <>
        <h1>Hola mundo</h1>
        <p>Seguro desea eliminar este elemento, exta acción es definitiva</p>
        <div className="alert-button__container">
          <button className="btn">Si, eliminar</button>
          <button className="btn">No, cancelar</button>
        </div>
      </>
    );
  };

  const handleEdit = (id: number) => {
    console.log("Editing" + id);
  };

  return (
    <section className="milestones-table">
      <TableHeader
        title="hitos"
        search={search}
        handleAdd={handleAdd}
        handleSearch={handleSearch}
      />

      <main className="milestones-table__body">
        {milestones.map((milestone) => (
          <MilestoneCard
            key={milestone.id}
            {...milestone}
            handler={handleCard}
          />
        ))}
      </main>

      <Alert hook={alert}></Alert>
    </section>
  );
};

export default MilestonesTablePage;
