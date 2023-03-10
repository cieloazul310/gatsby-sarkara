/* eslint react/jsx-props-no-spreading: warn */
/* eslint no-underscore-dangle: warn */
import * as React from 'react';
import { Box, type BoxProps, type ThemeTypings } from '@chakra-ui/react';
import { useAlpha, usePrimaryToken } from './utils';

export type PaperProps = {
  colorSchemes?: ThemeTypings['colorSchemes'];
  hover?: boolean;
} & BoxProps;

function Paper({ colorSchemes, hover = false, ...props }: PaperProps) {
  const token = usePrimaryToken(600);
  const bg = useAlpha(colorSchemes ? `${colorSchemes}.600` : token, 0.08);
  const hovered = useAlpha(colorSchemes ? `${colorSchemes}.600` : token, 0.16);
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
  colorSchemes: undefined,
  hover: false,
};

export default Paper;
