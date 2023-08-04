import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Game {
  id: number;
  name: string;
  background_image: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}
const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then((data) => {
        setGames(data.data.results);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
      })
      .finally(() => {});
    return () => controller.abort();
  }, []);

  return { games, error };
};

export default useGames;
