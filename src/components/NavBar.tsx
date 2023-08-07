import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onChange: (search: string) => void;
}

const NavBar = ({ onChange }: Props) => {
  return (
    <HStack padding={"10px"}>
      <Image src={logo} alt="logo" boxSize={"60px"} />
      <SearchInput onChange={onChange} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
