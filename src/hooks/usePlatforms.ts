import { QueryClient, useQuery, useQueryClient } from "@tanstack/react-query";
import APIclient, { FetchDataResponse } from "../services/api-client";
import platforms from "../data/platforms";
import ms from "ms";

const apiClient = new APIclient<Platform>("/platforms/lists/parents");

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => {
  return useQuery<Platform[], Error>({
    queryKey: ["platforms"],
    staleTime: ms("24 hours"), // 24 hours
    queryFn: () => apiClient.getAll(),
    initialData: platforms,
  });
};

export const getPlatformFromId = (id: number) => {
  return platforms?.find((platform) => platform.id === id);
};

export default usePlatforms;
