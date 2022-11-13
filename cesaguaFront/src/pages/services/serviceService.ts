import useInterceptor from "../../hooks/useInterceptor";
import { BACK_HOST } from "../../utils/Constants";
import { Milestone } from "./../../models/Milestone";

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

  const createOne = async (milestone: Milestone) => {
    return await postData(URL, milestone);
  };

  const updateOne = async (milestone: Milestone) => {
    return await putData(`${URL}/${milestone.id}`, milestone);
  };

  return { getAll, getOne, deleteOne, createOne, updateOne};
};

export default serviceService;
