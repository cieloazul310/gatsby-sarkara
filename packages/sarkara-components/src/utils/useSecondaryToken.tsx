import { useTheme } from '@chakra-ui/react';

function useSecondaryToken(shade?: number) {
  const theme = useTheme();
  const prefix =
    theme.colors?.secondary && typeof theme.colors?.secondary === 'object'
      ? 'secondary'
      : 'red';
  if (!shade) return prefix;
  return `${prefix}.${shade}`;
}

export default useSecondaryToken;
