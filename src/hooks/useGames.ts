import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
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

const useGames = (gameQuery: GameQuery) => {
  return useInfiniteQuery<Game[], Error>({
    queryKey: ["games", gameQuery],
    keepPreviousData: true,
    getNextPageParam: (lastPage, pages) => {
      return lastPage.length > 0 ? pages.length + 1 : undefined;
    },
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id.toString(),
          ordering: gameQuery.sortOrder,
          search: gameQuery.search,
          page: pageParam,
          page_size: gameQuery.count,
        },
      }),
  });

  // return useQuery<Game[], Error>({
  //   queryKey: ["games", gameQuery],
  //   staleTime: 30 * 60 * 1000, // 30 minutes
  //   queryFn: () =>
  //     apiClient.getAll({
  //       params: {
  //         genres: gameQuery.genre?.id,
  //         parent_platforms: gameQuery.platform?.id.toString(),
  //         ordering: gameQuery.sortOrder,
  //         search: gameQuery.search,
  //       },
  //     }),
  // });
};

export default useGames;
