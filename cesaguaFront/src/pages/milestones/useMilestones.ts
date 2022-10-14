import { useCallback, useEffect, useRef, useState } from "react";
import AlertSystem from "../../utils/AlertSystem";

import { useNavigate } from "react-router-dom";

import milsetoneService from "./milsetoneService";
import useMemory from "../../hooks/useMemory";

const useMilestones = () => {
  const alerts = AlertSystem();
  const [search, setSearch] = useState("");
  const [milestones, setMilestones] = useState([]);
  const allMilestones = useRef();

  const { obtainMemory, updateMemory } = useMemory();

  const navigate = useNavigate();

  const { getAll, deleteOne } = milsetoneService();

  useEffect(() => {
    // We load what is memorized if the time limit has not passed.
    const memorizedMilestones = obtainMemory("milestones");

    if (memorizedMilestones!.state) {
      setMilestones(memorizedMilestones!.data);
      allMilestones.current = memorizedMilestones!.data;
    } else {
      getAll()
        .then((response) => {
          updateMemory("milestones", response.data);
          allMilestones.current = response.data;
          setMilestones(response.data);
        })
        .catch(() => {
          setMilestones([]);
        });
    }
  }, []);

  useEffect(() => {
    if (allMilestones.current) {
      setMilestones(
        (allMilestones.current as any).filter((milestone: any) =>
          milestone.title.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [search]);

  const reloadMilestones = useCallback(() => {
    getAll().then((response) => {
      updateMemory("milestones", response.data);
      allMilestones.current = response;
      setMilestones(response);
    });
  }, []);

  const handleAdd = () => {
    navigate("/milestones/create");
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
      await deleteOne(id);

      setTimeout(() => {
        alerts.toastAlert("Se eliminó correctamente", "success");
        reloadMilestones();
      }, 500);
    } catch (error) {
      setTimeout(() => {
        alerts.toastAlert("No se pudo eliminar", "error");
      }, 500);
    }
  };

  const handleEdit = (id: number) => {
    navigate(`/milestones/edit/${id}`);
  };

  return { search, milestones, handleAdd, handleSearch, handleCard };
};
export default useMilestones;
