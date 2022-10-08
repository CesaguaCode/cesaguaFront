import { useCallback, useEffect, useRef, useState } from "react";
import AlertSystem from "../../../utils/AlertSystem";
import MilestoneCard from "./components/MilestoneCard";
import TableHeader from "./components/TableHeader";
import "./MilestonesTablePage.scss";
import "animate.css";
import milestoneRequest from "./request.json";
import { MilestoneService } from "../MilsetoneService";

const MilestonesTablePage = () => {
  const [search, setSearch] = useState("");
  const [milestones, setMilestones] = useState(milestoneRequest as Array<any>);
  const allMilestones = useRef();
  const alerts = AlertSystem();

  const service: MilestoneService = new MilestoneService();

  useEffect(() => {
    service.getAll().then((response) => {
      allMilestones.current = response;
      setMilestones(response);
    });
  }, []);

  useEffect(() => {
    if (allMilestones.current) {
      setMilestones(
        (allMilestones.current as any).filter((milestone: any) =>
          milestone.title.includes(search)
        )
      );
    }
  }, [search]);

  const reloadMilestones = useCallback(
    () => {
      service.getAll().then((response) => {
        allMilestones.current = response;
        setMilestones(response);
      });
    },
    [],
  )
  

  const handleAdd = () => {
    console.log("Agregando");
  };

  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };

  const handleCard = (e: any) => {
    e.currentTarget.name === "edit"
      ? handleEdit(e.currentTarget.id)
      : handleDelete(e.currentTarget.id, e.currentTarget.dataset.title);
  };

  const handleDelete = async (id: number, title: string) => {
    const { isConfirmed }: any = await alerts.promiseAlert(
      "Atención",
      `¿Seguro desea eliminar el hito con nombre "${title}"?`
    );

    if (!isConfirmed) return;

    try {
      await service.delete(id);

      setTimeout(() => {
        alerts.toastAlert("Se eliminó correctamente", "success");
        reloadMilestones()
      }, 500);
    } catch (error) {
      setTimeout(() => {
        alerts.toastAlert("No se pudo eliminar", "error");
      }, 500);
    }
    
  };

  const handleEdit = (id: number) => {
    console.log("Editing" + id);
  };

  return (
    <>
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
      </section>
    </>
  );
};

export default MilestonesTablePage;
