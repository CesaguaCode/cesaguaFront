import useInterceptor from "../../hooks/useInterceptor";
import { BACK_HOST } from "../../utils/Constants";
import { Service } from "./../../models/Service";

const serviceService = () => {
  const URL: string = `${BACK_HOST}/service`;

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

  const createOne = async (service: Service) => {
    console.log(service)
    return await postData(URL, service);
   
  };

  const updateOne = async (service: Service) => {
    return await putData(`${URL}/${service.id}`, service);
  };

  return { getAll, getOne, deleteOne, createOne, updateOne};
};

export default serviceService;
