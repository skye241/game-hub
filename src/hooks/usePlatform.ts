import { useQuery } from "@tanstack/react-query";
import APIclient, { FetchDataResponse } from "../services/api-client";
import platforms from "../data/platforms";

const apiClient = new APIclient<Platform>("/platforms/lists/parents");

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => {
  return useQuery<Platform[], Error>({
    queryKey: ["platforms"],
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    queryFn: () => apiClient.getAll(),
    initialData: platforms,
  });
};

export default usePlatforms;
