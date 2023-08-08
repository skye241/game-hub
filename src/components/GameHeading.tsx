import { Heading } from "@chakra-ui/react";
import useGenres, { Genre, getGenreFromId } from "../hooks/useGenres";
import usePlatforms, {
  Platform,
  getPlatformFromId,
} from "../hooks/usePlatforms";
import useFindData from "../hooks/useFindData";

interface Props {
  platform: number | undefined;
  genre: number | undefined;
}

const GameHeading = ({ platform, genre }: Props) => {
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
