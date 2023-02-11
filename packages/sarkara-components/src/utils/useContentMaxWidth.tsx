import { useTheme, type ChakraProps } from '@chakra-ui/react';

function useContentMaxWidth(): ChakraProps['maxWidth'] {
  const theme = useTheme();
  return theme.sizes?.content ?? 'container.xl';
}

export default useContentMaxWidth;
