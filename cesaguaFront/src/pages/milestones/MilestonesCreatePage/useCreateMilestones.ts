import { useState, ChangeEvent, useRef, useCallback, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import useImageSystem from "../../../hooks/useImageSystem";
import AlertSystem from "../../../utils/AlertSystem";
import { CONVERT_DATE_EDIT } from "../../../utils/Constants";
import milsetoneService from "../milsetoneService";

const useCreateMilestones = () => {
  const navigate = useNavigate();

  const { downscaleImage } = useImageSystem();
  const { promiseAlert, toastAlert } = AlertSystem();
  const { createOne, updateOne, getOne } = milsetoneService();

  const params = useParams();
  const { id } = params;

  const titleRef = useRef();
  const dateRef = useRef();
  const descriptionRef = useRef();
  const imageRef = useRef();

  const pageRefs = { titleRef, dateRef, descriptionRef, imageRef };

  const getEditable = async (id: number) => {
    const res = await getOne(id);

    if (res.state === 200) {
      setMilestoneData({ ...res.data , date:CONVERT_DATE_EDIT(res.data.date)});
    } else {
      toastAlert("Surgió un error al obtener el hito", "error");
      return navigate("/milestones/crud");
    }
  };

  useEffect(() => {
    if (id) {
      getEditable(parseInt(id));
    }
  }, []);

  const [milestoneData, setMilestoneData] = useState<any>({
    date: "",
    title: "",
    description: "",
    image: "",
  });

  const handleInput = (e: ChangeEvent<any>) => {
    setMilestoneData((previous: any) => {
      return {
        ...previous,
        [e.target.name]: e.target.value,
      };
    });

    if (e.target.name === "description") {
      e.target.style.height = "inherit";
      e.target.style.height = `${e.target.scrollHeight}px`;
    }
  };

  const handleCreate = async () => {
    if (!validateData()) {
      return;
    }

    try {
      const res = id ? await updateOne({ ...milestoneData }) : await createOne({ id:id,...milestoneData });

      if (res.state === 201 || res.state === 200) {
        toastAlert(
          `El hito se ${id ? "editó" : "creó"} exitosamente`,
          "success"
        );
        navigate("/milestones/crud");
      }
    } catch (error: any) {

      if (error.response && error.response.status === 403) {
        toastAlert("No tiene permisos para realizar esta acción", "error");
      }
    }
  };

  const validateData = () => {
    if (!milestoneData.title) {
      shakeInput(titleRef);
      toastAlert("Debe agregar un título", "error");
      return false;
    }

    if (!milestoneData.date) {
      shakeInput(dateRef);
      toastAlert("Debe agregar una fecha", "error");
      return false;
    }

    if (!milestoneData.description) {
      shakeInput(descriptionRef);
      toastAlert("Debe agregar una descripcion", "error");
      return false;
    }

    if (!milestoneData.image) {
      shakeInput(imageRef);
      toastAlert("Debe agregar una imagen", "error");
      return false;
    }

    return true;
  };

  const handleRemoveImage = () =>
    setMilestoneData((prev: any) => {
      return { ...prev, image: "" };
    });

  const shakeInput = useCallback((ref: any) => {
    (ref.current as any).style.animation = "shakeX 1s";
  }, []);

  const clearAnimation = (e: any) => {
    e.target.style.animation = "";
  };

  const handleCancel = () => {
    if (
      milestoneData.date ||
      milestoneData.title ||
      milestoneData.description ||
      milestoneData.image
    ) {
      promiseAlert(
        "Atención",
        `Seguro desea cancelar,  ${
          id ? "el hito no se modificará" : "perderá los datos agregados"
        }`
      ).then((result: any) => result.isConfirmed && navigate(-1));
    } else {
      navigate(-1);
    }
  };

  const handlePicture = async (event: any) => {
    const file = event.target.files[0];

    if (!file) {
      setMilestoneData((prev: any) => {
        return { ...prev, image: "" };
      });
      return;
    }

    if (!file.type.includes("image")) {
      return toastAlert("No es una imagen válida", "error");
    }

    const resized = await downscaleImage(file);

    setMilestoneData((prev: any) => {
      return { ...prev, image: resized };
    });
  };

  return {
    id,
    milestoneData,
    handleInput,
    handleRemoveImage,
    handleCancel,
    handleCreate,
    clearAnimation,
    handlePicture,
    pageRefs,
  };
};

export default useCreateMilestones;
