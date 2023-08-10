import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import APIclient from "../services/api-client";
import { Game } from "./useGames";

const apiClient = new APIclient<Game>("/games");

const useGame = (id: string) => {
  return useQuery({
    queryKey: ["game", id],
    queryFn: () => apiClient.get(id),
  });
};

export default useGame;
