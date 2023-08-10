import { useInfiniteQuery } from "@tanstack/react-query";
import APIclient from "../services/api-client";
import useGameQueryStore from "../stores/gameQueryStore";
import { Game } from "../entities/Game";

const apiClient = new APIclient<Game>("/games");

const useGames = () => {
  const gameQuery = useGameQueryStore((state) => state.gameQuery);
  return useInfiniteQuery<Game[], Error>({
    queryKey: ["games", gameQuery],
    keepPreviousData: true,
    getNextPageParam: (lastPage, pages) => {
      return lastPage.length > 0 ? pages.length + 1 : undefined;
    },
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre,
          parent_platforms: gameQuery.platform,
          ordering: gameQuery.sortOrder,
          search: gameQuery.search,
          page: pageParam,
          page_size: 20,
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
