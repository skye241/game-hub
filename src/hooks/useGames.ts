import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { Platform } from "./usePlatform";
import APIclient from "../services/api-client";

const apiClient = new APIclient<Game>("/games");

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: {
    platform: Platform;
  }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) =>
  useQuery<Game[], Error>({
    queryKey: ["games", gameQuery],
    staleTime: 30 * 60 * 1000, // 30 minutes
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id.toString(),
          ordering: gameQuery.sortOrder,
          search: gameQuery.search,
        },
      }),
  });

export default useGames;
