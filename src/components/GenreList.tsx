import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../stores/gameQueryStore";

const GenreList = () => {
  const { genre: selectedGenre, updateGenre } = useGameQueryStore((s) => {
    return { genre: s.gameQuery.genre, updateGenre: s.updateGenre };
  });
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading fontSize={"2xl"} mb={3}>
        Genres
      </Heading>
      <List>
        {data?.map((genre) => (
          <ListItem key={genre.id}>
            <HStack marginY={2}>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                alt={genre.name}
                boxSize={"32px"}
                objectFit={"cover"}
                borderRadius={"8px"}
                backgroundClip={"content-box"}
              />
              <Button
                whiteSpace={"normal"}
                textAlign={"left"}
                onClick={() => {
                  updateGenre(genre.id);
                }}
                fontWeight={selectedGenre === genre.id ? "bold" : "normal"}
                fontSize="lg"
                variant={"link"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
