import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";
import useFindData from "../hooks/useFindData";

interface Props {
  onSelect: (platform: Platform) => void;
  selectedPlatform: number | undefined;
}

const PlatformSelector = ({ onSelect, selectedPlatform }: Props) => {
  const { data } = usePlatforms();
  const selectedPlatformData = useFindData(selectedPlatform, data);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatformData?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.map((platform) => (
          <MenuItem onClick={() => onSelect(platform)} key={platform.id}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
