import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IconButton, useColorMode } from '@chakra-ui/react';

export default function ThemeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="switch to dark or light mode"
      icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      bgColor="transparent"
      _hover={{ bgColor: 'transparent' }}
      onClick={toggleColorMode}
    />
  );
}
