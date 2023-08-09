import { useQuery } from "@tanstack/react-query";
import APIclient from "../services/api-client.ts";
import genres from "../data/genres.ts";
import ms from "ms";

const apiClient = new APIclient<Genre>("/genres");

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => {
  return useQuery<Genre[], Error>({
    queryKey: ["genres"],
    staleTime: ms("24 hours"), // 24 hours
    queryFn: () => apiClient.getAll(),
    initialData: genres,
  });
};

export const getGenreFromId = (id: number) => {
  return genres?.find((genre) => genre.id === id);
};

export default useGenres;
