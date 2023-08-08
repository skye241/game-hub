import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchDataResponse } from "../services/api-client";
import platforms from "../data/platforms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => {
  return useQuery<Platform[], Error>({
    queryKey: ["platforms"],
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    queryFn: () =>
      apiClient
        .get<FetchDataResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data.results),
    initialData: platforms,
  });
};

export default usePlatforms;
