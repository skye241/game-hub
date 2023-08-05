import { Heading } from "@chakra-ui/react";

interface Props {
  platform?: string;
  genre?: string;
}

const GameHeading = ({ platform, genre }: Props) => {
  return (
    <Heading as="h1" mb={5} fontSize={"5xl"}>
      {platform || ""} {genre || ""} Games
    </Heading>
  );
};

export default GameHeading;
