import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { Game } from "./useGames";

interface FetchDataResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    apiClient
      .get<FetchDataResponse<T>>(endpoint, { signal: controller.signal })
      .then((data) => {
        setData(data.data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setIsLoading(false);
      })
      .finally(() => {});
    return () => controller.abort();
  }, []);

  return { data, error, isLoading };
};

export default useData;
