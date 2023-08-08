import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchDataResponse } from "../services/api-client.ts";
import genres from "../data/genres.ts";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => {
  return useQuery<Genre[], Error>({
    queryKey: ["genres"],
    staleTime: 60 * 60 * 1000, // 24 hours
    queryFn: () =>
      apiClient
        .get<FetchDataResponse<Genre>>("/genres")
        .then((res) => res.data.results),
    initialData: genres,
  });
};

export default useGenres;
