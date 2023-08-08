import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: number | undefined;
  platform: number | undefined;
  sortOrder: string;
  search: string;
  count: number;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({
    count: 20,
  } as GameQuery);

  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{
        base: "1fr", // 1 column
        lg: "200px 1fr", // 2 columns
      }}
    >
      <GridItem area={"nav"}>
        <NavBar onChange={(search) => setGameQuery({ ...gameQuery, search })} />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX={5}>
          <GenreList
            onSelectGenre={(genre) =>
              setGameQuery({ ...gameQuery, genre: genre.id })
            }
            selectedGenre={gameQuery.genre}
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <Box paddingLeft={2}>
          <GameHeading platform={gameQuery.platform} genre={gameQuery.genre} />
          <HStack spacing={5} marginBottom={5}>
            <PlatformSelector
              onSelect={(plat) =>
                setGameQuery({ ...gameQuery, platform: plat.id })
              }
              selectedPlatform={gameQuery.platform}
            />
            <SortSelector
              selectedSortOrder={gameQuery.sortOrder}
              onSelect={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </HStack>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
