import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useRef } from "react";
import { useState } from "react";
import useMemory from "../../hooks/useMemory";
import pinsService from "./pinsService";
import AlertSystem from "../../utils/AlertSystem";

const usePins = () => {
  const alerts = AlertSystem();
  const [search, setSearch] = useState("");
  const [pins, setPins] = useState([]);

  const allPins = useRef();

  const navigate = useNavigate();

  const { obtainMemory, updateMemory } = useMemory();
  const { getAll, deleteOne } = pinsService();

  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };

  const handleEdit = (id:number) => {
    navigate(`/pins/edit/${id}`)
  }

  useEffect(() => {
    if (allPins.current) {
      setPins(
        (allPins.current as any).filter((pin: any) =>
          pin.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [search]);

  useEffect(() => {
    // We load what is memorized if the time limit has not passed.
    const memorizedPins = obtainMemory("pins");

    if (memorizedPins!.state) {
      setPins(memorizedPins!.data);
      allPins.current = memorizedPins!.data;
    } else {
      getAll()
        .then((response) => {
          const data = response.data.map((element: any) => {
            return { ...element, position: JSON.parse(element.position) };
          });

          allPins.current = data;

          updateMemory("pins", data);
          setPins(data);
        })
        .catch(() => {
          setPins([]);
        });
    }
  }, []);

  const reloadPins = useCallback(() => {
    getAll().then((response) => {
      const data = response.data.map((element: any) => {
        return { ...element, position: JSON.parse(element.position) };
      });
      updateMemory("pins", data);
      allPins.current = data;
      setPins(data);
    });
  }, []);

  const handleAdd = () => {
    navigate("/pins/create");
  };

  const handleDelete = async (id: number, name: string) => {
    const { isConfirmed }: any = await alerts.promiseAlert(
      "Atención",
      `¿Seguro desea eliminar el sitio con nombre "${name}"?`
    );

    if (!isConfirmed) return;

    try {
      const res = await deleteOne(id);


      if (res.state === 200) {
        setTimeout(() => {
          alerts.toastAlert("Se eliminó correctamente", "success");
          reloadPins();
        }, 500);
      } else {
        alerts.toastAlert("No se pudo eliminar", "error");
      }
    } catch (error) {
      setTimeout(() => {
        alerts.toastAlert("No se pudo eliminar", "error");
      }, 500);
    }
  };

  return { handleAdd, pins, search, handleSearch, handleDelete, handleEdit };
};

export default usePins;
