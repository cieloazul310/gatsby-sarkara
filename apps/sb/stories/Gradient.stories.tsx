import * as React from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';
import { useGradient } from '@cieloazul310/sarkara-components';

export default {
  title: 'Gradient',
};

export function Basic() {
  const bgGradient = useGradient('blue.600', 'cyan.100');
  return <Box height={200} bgGradient={bgGradient} />;
}

export function WithColorMode() {
  const a = useColorModeValue('blue.400', 'blue.700');
  const b = useColorModeValue('cyan.100', 'black');
  const bgGradient = useGradient(a, b);

  return <Box height={200} bgGradient={bgGradient} />;
}

export function Radial() {
  const bgGradient = useGradient('orange.400', 'red.700', { type: 'radial' });
  return <Box height={200} bgGradient={bgGradient} />;
}
