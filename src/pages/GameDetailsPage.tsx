import useGame from "../hooks/useGame";
import { useParams } from "react-router-dom";
import { Box, Heading, Spinner, Text } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";

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
    </Box>
  );
};

export default GameDetailsPage;
