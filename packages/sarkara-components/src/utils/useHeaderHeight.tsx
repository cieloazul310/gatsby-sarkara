import { useTheme } from '@chakra-ui/react';

function useHeaderHeight(): (string | number) | (string | number)[] {
  const theme = useTheme();
  return theme.sizes?.header ?? '56px';
}

export default useHeaderHeight;
