import APIclient from "../services/api-client";
import { ScreenShot } from "../entities/ScreenShot";
import { useQuery } from "@tanstack/react-query";

const useScreenshots = (gameId: number) => {
  const apiClient = new APIclient<ScreenShot>(
    "/games/" + gameId + "/screenshots"
  );
  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: () => apiClient.getAll(),
  });
};

export default useScreenshots;
