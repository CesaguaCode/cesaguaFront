import { useCallback, useEffect, useRef, useState } from "react";
import AlertSystem from "../../utils/AlertSystem";

import { useNavigate } from "react-router-dom";

import serviceService from "./serviceService";
import useMemory from "../../hooks/useMemory";

const useServices = () => {
  const alerts = AlertSystem();
  const [search, setSearch] = useState("");
  const [services, setServices] = useState([]);
  const allServices = useRef();

  const { obtainMemory, updateMemory } = useMemory();
  const navigate = useNavigate();
  const { getAll, deleteOne } = serviceService();

  useEffect(() => {
    // We load what is memorized if the time limit has not passed.
    const memorizedServices = obtainMemory("services");

    if (memorizedServices!.state) {
      setServices(memorizedServices!.data);
      allServices.current = memorizedServices!.data;
    } else {
      getAll()
        .then((response) => {
          updateMemory("services", response.data);
          allServices.current = response.data;
          setServices(response.data);
        })
        .catch(() => {
          setServices([]);
        });
    }
  }, []);

  useEffect(() => {
    if (allServices.current) {
      setServices(
        (allServices.current as any).filter((milestone: any) =>
          milestone.title.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [search]);

  const reloadServices = useCallback(() => {
    getAll().then((response) => {
      updateMemory("services", response.data);
      allServices.current = response.data;
      setServices(response.data);
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
      `¿Seguro desea eliminar el servicio con nombre "${title}"?`
    );

    if (!isConfirmed) return;

    try {
      await deleteOne(id);

      setTimeout(() => {
        alerts.toastAlert("Se eliminó correctamente", "success");
        reloadServices();
      }, 500);
    } catch (error) {
      setTimeout(() => {
        alerts.toastAlert("No se pudo eliminar", "error");
      }, 500);
    }
  };

  const handleEdit = (id: number) => {
    navigate(`/services/edit/${id}`);
  };

  return { search, services, handleAdd, handleSearch, handleCard };
};
export default useServices;
