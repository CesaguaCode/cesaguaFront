import milsetoneService from "./milsetoneService";
import { useQuery } from "react-query";

const milestonesData = () => {
  const { getAll } = milsetoneService();

  const queryOptions = {
    cacheTime: 10000,
    staleTime: 0,
    refetchInterval: 20000,
    refetchIntervalInBackground: false,
  };

  const { isLoading, isFetching, error, data } = useQuery(
    "MILESTONES-DATA",
    getAll,
    {
      ...queryOptions,
      select: (data) => {
        const milestones = data.data.map((milestone: any) => {
          return milestone;
        });
        return milestones;
      }
    }
  );

  return { isLoading, isFetching, error, data };
};

export default milestonesData;
