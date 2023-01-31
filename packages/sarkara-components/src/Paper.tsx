/* eslint react/jsx-props-no-spreading: warn */
/* eslint no-underscore-dangle: warn */
import * as React from 'react';
import {
  Box,
  useColorMode,
  type BoxProps,
  type ThemeTypings,
} from '@chakra-ui/react';
import useAlpha from './utils/useAlpha';

export type PaperProps = {
  colorScheme: ThemeTypings['colorSchemes'];
  hover?: boolean;
} & BoxProps;

function Paper({ colorScheme, hover = false, ...props }: PaperProps) {
  const { colorMode } = useColorMode();
  const isLightMode = colorMode === 'light';
  const bg = useAlpha(`${colorScheme}.600`, isLightMode ? 0.08 : 0.16);
  const hovered = useAlpha(`${colorScheme}.600`, isLightMode ? 0.16 : 0.32);
  return (
    <Box
      rounded="xl"
      p={[4, 8]}
      bg={bg}
      transition="background .25s"
      _hover={hover ? { bg: hovered, ...props._hover } : props._hover}
      {...props}
    />
  );
}

Paper.defaultProps = {
  hover: false,
};

export default Paper;
