import { Heading } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import { Genre } from "../entities/Genre";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../entities/Platform";
import useFindData from "../hooks/useFindData";
import useGameQueryStore from "../stores/gameQueryStore";

const GameHeading = () => {
  const { genre, platform } = useGameQueryStore((s) => {
    return { genre: s.gameQuery.genre, platform: s.gameQuery.platform };
  });
  const { data: platforms } = usePlatforms();
  const selectedPlatform = useFindData<Platform>(platform, platforms);
  const { data: genres } = useGenres();
  const selectedGenre = useFindData<Genre>(genre, genres);

  return (
    <Heading as="h1" mb={5} fontSize={"5xl"}>
      {selectedPlatform?.name || ""} {selectedGenre?.name || ""} Games
    </Heading>
  );
};

export default GameHeading;
