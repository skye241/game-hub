import { useQuery } from "@tanstack/react-query";
import APIclient from "../services/api-client";
import { Movie } from "../entities/Movie";

const useTrailer = (slug: string) => {
  const apiClient = new APIclient<Movie>(`games/${slug}/movies`);

  return useQuery({
    queryKey: ["trailer", slug],
    queryFn: () => apiClient.getAll(),
  });
};

export default useTrailer;
