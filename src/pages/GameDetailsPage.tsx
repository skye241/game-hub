import useGame from "../hooks/useGame";
import { useParams } from "react-router-dom";
import {
  Box,
  GridItem,
  Heading,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import GameScreenShots from "../components/GameScreenShots";

const GameDetailsPage = () => {
  const params = useParams();
  const { data, isLoading, error } = useGame(params.id!);
  if (isLoading) {
    return <Spinner />;
  }
  if (error) {
    return <Text>Something went wrong</Text>;
  }
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} m={5}>
      <GridItem>
        <Heading>{data?.name} </Heading>
        <ExpandableText text={data?.description_raw || ""} maxLength={200} />
        <Box height={5} />
        <GameAttributes data={data!} />
      </GridItem>
      <GridItem>
        <GameTrailer slug={data?.slug} />
        <GameScreenShots gameId={data?.id!} />
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailsPage;
