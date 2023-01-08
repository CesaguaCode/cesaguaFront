import { useCallback, useEffect, useRef, useState } from "react";

import { useQueryClient } from "react-query";

import AlertSystem from "../../utils/AlertSystem";

import { useNavigate } from "react-router-dom";

import milsetoneService from "./milsetoneService";
import milestonesData from "./milestonesData";

import milestonesMutations from "./milestonesMutation";

const useMilestones = () => {
  const alerts = AlertSystem();
  const [search, setSearch] = useState("");
  const queryClient = useQueryClient();

  const {handleUpdate, handleDelete} = milestonesMutations();

  const filteredMilestones = useRef();

  const { isLoading, isFetching, error, data } = milestonesData();

  const navigate = useNavigate();

  const { deleteOne } = milsetoneService();

  useEffect(() => {
    if (data) {
      queryClient.invalidateQueries("MILESTONES-DATA");
      filteredMilestones.current = data.filter((milestone: any) =>
        milestone.title.includes(search)
      );
    }
  }, [search]);

  const handleAdd = () => {
    navigate("/milestones/create");
  };

  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };

  const handleCard = (e: any) => {
    e.currentTarget.name === "edit"
      ? handleEdit(e.currentTarget.id)
      : handleClickDelete(e.currentTarget.id, e.currentTarget.dataset.title);
  };

  const handleClickDelete = async (id: number, title: string) => {
    const { isConfirmed }: any = await alerts.promiseAlert(
      "Atención",
      `¿Seguro desea eliminar el hito con nombre "${title}"?`
    );

    if (!isConfirmed) return;

    handleDelete(
        id, 
        () => {alerts.toastAlert("Se eliminó correctamente", "success");},
        () => {alerts.toastAlert("No se pudo eliminar", "error");}      
    )

  };

  const handleEdit = (id: number) => {
    navigate(`/milestones/edit/${id}`);
  };

  return {
    search,
    milestones: data,
    filtered: filteredMilestones.current,
    handleAdd,
    handleSearch,
    handleCard,
  };
};
export default useMilestones;
