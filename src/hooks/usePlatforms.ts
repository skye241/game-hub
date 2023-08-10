import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import platforms from "../data/platforms";
import APIclient from "../services/api-client";
import Platform from "../entities/Platform";

const apiClient = new APIclient<Platform>("/platforms/lists/parents");

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
