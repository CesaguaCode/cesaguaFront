import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useMemory from "../../../hooks/useMemory";

import AlertSystem from "../../../utils/AlertSystem";
import pinsService from "../pinsService";
import CreateMap from "./components/CreateMap";

import "./pinsCreatePage.scss";

const PinsCreatePage = () => {
  const { promiseAlert, toastAlert } = AlertSystem();
  const navigate = useNavigate();

  const params = useParams();
  const { id } = params;

  const nameRef = useRef();

  const mapState = useState();
  const { getOne, createOne, updateOne } = pinsService();

  const {forgetMemory} = useMemory(); 

  const handleCancel = () => {
    if (newMarker.name) {
      promiseAlert(
        "Atención",
        `Seguro desea cancelar,  ${
          id ? "el hito no se modificará" : "perderá los datos agregados"
        }`
      ).then((result: any) => result.isConfirmed && navigate("/pins/crud"));
    } else {
      navigate(-1);
    }
  };

  const handleCreate = async () => {
    if (!newMarker.name) {
      (nameRef.current as any).style.animation = "shakeX 1s";
      return toastAlert("Debe agregar un nombre", "error");
    }

    try {
      const res = id
        ? await updateOne({ ...newMarker })
        : await createOne({ id: id, ...newMarker });

      if (res.state === 201 || res.state === 200) {
         toastAlert(
          `El sitio se ${id ? "editó" : "creó"} exitosamente`,
          "success"
        );
        forgetMemory("pins");
        navigate("/pins/crud");
        return
      }

      return toastAlert(
        `El sitio no se pudo ${id ? "editar" : "crear"}`,
        "error"
      );
    } catch (error: any) {
      console.dir(error);

      if (error.response && error.response.status === 403) {
        toastAlert("No tiene permisos para realizar esta acción", "error");
      }
    }
  };

  const getEditable = async (id: number) => {
    const res = await getOne(id);

    if (res.state === 200) {
      const position = JSON.parse(res.data.position);

      if(mapState[0]){
        (mapState[0] as any).flyTo(position,10)
      }

      setNewMarker({
        ...res.data,
        position: { lat: position[0], lng: position[1] },
      });
    } else {
      toastAlert("Surgió un error al obtener el sitio", "error");
      return navigate("/pins/crud");
    }
  };

  useEffect(() => {
    if (id) {
      getEditable(parseInt(id));
    }
  }, [mapState[0]]);

  const [newMarker, setNewMarker] = useState<any>({
    name: "",
    province: "Limón",
    canton: "Pococí",
    district: "Guápiles",
    position: { lat: 10.18, lng: -83.74 },
  });

  return (
    <>
      <h2 className="pin-inputs__title">
        {id ? "Modificar" : "Agregar"} un sitio
      </h2>
      <CreateMap
        mapState={mapState}
        nameRef={nameRef}
        newMarker={newMarker}
        setNewMarker={setNewMarker}
        handleCreate={handleCreate}
        handleCancel={handleCancel}
      />
    </>
  );
};

export default PinsCreatePage;
