import { SimpleGrid, Image } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
  gameId: number;
}

const GameScreenShots = ({ gameId }: Props) => {
  const { data, isLoading, isError } = useScreenshots(gameId);
  if (isLoading) return null;
  if (isError) throw new Error("Failed to load screenshots");
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2} mt={5}>
      {data?.map((screenshot) => (
        <Image key={screenshot.id} src={screenshot.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenShots;
