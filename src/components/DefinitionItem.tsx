import { Box, Heading } from "@chakra-ui/react";

interface Props {
  title: string;
  children: React.ReactNode;
}

const DefinitionItem = ({ title, children }: Props) => {
  return (
    <Box flex={1}>
      <Heading as="dt" fontWeight="bold" fontSize="md" color="gray.500">
        {title}
      </Heading>
      <Box mt={1} />
      {children}
    </Box>
  );
};

export default DefinitionItem;
