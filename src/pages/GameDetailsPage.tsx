import useGame from "../hooks/useGame";
import { useParams } from "react-router-dom";
import {
  Box,
  Flex,
  HStack,
  Heading,
  List,
  ListItem,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import DefinitionItem from "../components/DefinitionItem";
import CriticScore from "../components/CriticScore";
import GameAttributes from "../components/GameAttributes";

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
    <Box margin={5}>
      <Heading>{data?.name} </Heading>
      <ExpandableText text={data?.description_raw || ""} maxLength={200} />
      <Box mt={5}>
        <GameAttributes data={data!} />
      </Box>
    </Box>
  );
};

export default GameDetailsPage;
