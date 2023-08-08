import { useQuery } from "@tanstack/react-query";
import APIclient from "../services/api-client.ts";
import genres from "../data/genres.ts";

const apiClient = new APIclient<Genre>("/genres");

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => {
  return useQuery<Genre[], Error>({
    queryKey: ["genres"],
    staleTime: 60 * 60 * 1000, // 24 hours
    queryFn: () => apiClient.getAll(),
    initialData: genres,
  });
};

export default useGenres;
