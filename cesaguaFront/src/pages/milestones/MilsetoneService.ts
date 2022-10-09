import axios from "axios";

const milsetoneService = () => {
  const URL: string = "http://localhost:3200/milestone";

  const getAll = async () => {
    return await axios.get(URL).then(({ data }) => data.data);
  }

  const deleteOne = async (id: number) => {
    const config = {
      headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoIjp7InJvbCI6MywiaWQiOjF9LCJpYXQiOjE2NjUyNDI2MjEsImV4cCI6MTY2NTI3ODYyMX0.AGsl3cjsEofudgcLHHfECP2vJFMbWKg19YqVHuAZMak` },
    };

    return await axios.delete(`${URL}/${id}`, config);
  }

  return { getAll, deleteOne }

}

export default milsetoneService;