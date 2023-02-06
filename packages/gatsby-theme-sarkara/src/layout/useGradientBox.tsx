import { useColorModeValue } from '@chakra-ui/react';
import { useGradient } from '@cieloazul310/sarkara-components';

function useGradientBox() {
  const color = useColorModeValue('white', 'white');
  const primary = useColorModeValue('primary.500', 'primary.700');
  const secondary = useColorModeValue('secondary.100', 'gray.900');
  const bgGradient = useGradient(primary, secondary);

  return { color, bgGradient };
}

export default useGradientBox;
