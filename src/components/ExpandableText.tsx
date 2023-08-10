import { useState } from "react";
import { Button, Text } from "@chakra-ui/react";
interface Props {
  text: string;
  maxLength: number;
}

const ExpandableText = ({ text, maxLength }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (text.length <= maxLength) return <Text>{text}</Text>;

  const subString = text.substring(0, maxLength) + "...";
  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <Text>
      {isExpanded ? text : subString}
      <Button
        ml={2}
        fontWeight={"bold"}
        colorScheme="yellow"
        onClick={handleClick}
        size={"xs"}
      >
        {!isExpanded ? "Read More" : "Show Less"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
