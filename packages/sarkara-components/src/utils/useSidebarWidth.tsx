import { useTheme, type ChakraProps } from '@chakra-ui/react';

function useSidebarWidth(): ChakraProps['width'] {
  const theme = useTheme();
  return theme.sizes?.sidebar ?? [0, 0, '240px', '320px'];
}

export default useSidebarWidth;
