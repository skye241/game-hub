import { useQuery } from "@tanstack/react-query";
import APIclient from "../services/api-client";
import { Game } from "../entities/Game";

const apiClient = new APIclient<Game>("/games");

const useGame = (id: string) => {
  return useQuery({
    queryKey: ["game", id],
    queryFn: () => apiClient.get(id),
  });
};

export default useGame;
