import useGame from "../hooks/useGame";
import { useParams } from "react-router-dom";
import { Box, Heading, Spinner, Text } from "@chakra-ui/react";

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
      <Text>{data?.description_raw}</Text>
    </Box>
  );
};

export default GameDetailsPage;
