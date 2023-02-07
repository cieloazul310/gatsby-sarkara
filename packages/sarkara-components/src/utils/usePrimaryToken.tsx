import { useTheme } from '@chakra-ui/react';

function usePrimaryToken(shade?: number) {
  const theme = useTheme();
  const prefix =
    theme.colors?.primary && typeof theme.colors?.primary === 'object'
      ? 'primary'
      : 'gray';
  if (!shade) return prefix;
  return `${prefix}.${shade}`;
}

export default usePrimaryToken;
