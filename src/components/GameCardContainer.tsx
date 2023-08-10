import { Box } from "@chakra-ui/react";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      borderRadius={10}
      overflow={"hidden"}
      _hover={{
        transform: "scale(1.05)",
        transition: "transition .15s ease-in",
      }}
      display="inline-block"
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
