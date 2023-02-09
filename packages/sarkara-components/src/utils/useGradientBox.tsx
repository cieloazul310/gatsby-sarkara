import { useColorModeValue } from '@chakra-ui/react';
import useGradient from './useGradient';
import usePrimaryToken from './usePrimaryToken';
import useSecondaryToken from './useSecondaryToken';

function useGradientBox() {
  const color = useColorModeValue('white', 'white');
  const primaryLight = usePrimaryToken(500);
  const primaryDark = usePrimaryToken(700);
  const secondaryLight = useSecondaryToken(100);
  const primary = useColorModeValue(primaryLight, primaryDark);
  const secondary = useColorModeValue(secondaryLight, 'gray.900');
  const bgGradient = useGradient(primary, secondary);

  return { color, bgGradient };
}

export default useGradientBox;
