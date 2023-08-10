import { Box, Link } from "@chakra-ui/react";
import React from "react";
import useTrailer from "../hooks/useTrailer";

interface Props {
  slug: string | undefined;
}

const GameTrailer = ({ slug }: Props) => {
  var { data } = useTrailer(slug || "");
  if (!data || data.length === 0) {
    return <Box />;
  }
  const selected = data[0];
  return (
    <Box mt={5}>
      <video
        width="100%"
        src={selected.data.max}
        poster={selected.preview}
        controls
      ></video>
    </Box>
  );
};

export default GameTrailer;
