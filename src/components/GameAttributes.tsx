import DefinitionItem from "./DefinitionItem";
import { SimpleGrid, Text } from "@chakra-ui/react";
import CriticScore from "./CriticScore";
import { Game } from "../entities/Game";

interface Props {
  data: Game;
}

const GameAttributes = ({ data }: Props) => {
  return (
    <SimpleGrid columns={2} spacing={5} as={"dl"}>
      <DefinitionItem title="Platforms">
        {data?.parent_platforms.map((platform) => (
          <Text key={platform.platform.id}>{platform.platform.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem title="Metascore">
        <CriticScore score={data?.metacritic || 0} />
      </DefinitionItem>
      <DefinitionItem title="Genres">
        {data?.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem title="Publishers">
        {data?.publishers.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
