import useInterceptor from "../../hooks/useInterceptor";
import { Pin } from "./../../models/Pin";

const pinsService = () => {
  const URL: string = "http://localhost:3200/pin";

  const { getData, deleteData, postData, putData } = useInterceptor();

  const getAll = async () => {
    return await getData(URL);
  };

  const getOne = async (id: number) => {
    return await getData(`${URL}/${id}`);
  };

  const deleteOne = async (id: number) => {
    return await deleteData(`${URL}/${id}`);
  };

  const createOne = async (pin: Pin) => {
    const {lat, lng} = pin.position;
    return await postData(URL, {...pin, position: `[${lat.toFixed(3)}, ${lng.toFixed(3)}]`});
  };

  const updateOne = async (pin: Pin) => {
    const {lat, lng} = pin.position;
    return await putData(`${URL}/${pin.id}`, {...pin, position: `[${lat.toFixed(3)}, ${lng.toFixed(3)}]`});
  };

  return { getAll, getOne, deleteOne, createOne, updateOne};
};

export default pinsService;
