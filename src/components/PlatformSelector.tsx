import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import useFindData from "../hooks/useFindData";
import useGameQueryStore from "../stores/gameQueryStore";

const PlatformSelector = () => {
  const { platform, updatePlatform } = useGameQueryStore((s) => {
    return { platform: s.gameQuery.platform, updatePlatform: s.updatePlatform };
  });

  const { data } = usePlatforms();
  const selectedPlatformData = useFindData(platform, data);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatformData?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.map((platform) => (
          <MenuItem
            onClick={() => updatePlatform(platform.id)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
