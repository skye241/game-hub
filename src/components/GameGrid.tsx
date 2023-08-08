import useGames from "../hooks/useGames";
import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";
import { Fragment } from "react";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, isLoading, error, fetchNextPage, isFetchingNextPage } =
    useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  if (error) return <Text>{error.message}</Text>;

  return (
    <Box>
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
          xl: 4,
        }}
        padding={"10px"}
        spacing={6}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}

        {data?.pages.map((page) => (
          <Fragment>
            {page.map((game) => (
              <GameCardContainer key={game.id}>
                {" "}
                <GameCard game={game} />{" "}
              </GameCardContainer>
            ))}
          </Fragment>
        ))}

        {/* {data?.map((game) => (
          <GameCardContainer key={game.id}>
            {" "}
            <GameCard game={game} />{" "}
          </GameCardContainer>
        ))} */}
      </SimpleGrid>
      <Button
        className="btn btn-primary my-3 ms-1"
        disabled={isFetchingNextPage}
        onClick={() => fetchNextPage()}
      >
        {" "}
        {isFetchingNextPage ? "Loading..." : "Load More"}
      </Button>
    </Box>
  );
};

export default GameGrid;
