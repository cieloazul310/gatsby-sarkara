/* eslint react/jsx-props-no-spreading: warn */
/* eslint no-underscore-dangle: warn */
import * as React from 'react';
import { Button, useColorMode, type ButtonProps } from '@chakra-ui/react';
import useAlpha from './utils/useAlpha';

export type PaperButtonProps = Omit<ButtonProps, 'colorScheme'> &
  Required<Pick<ButtonProps, 'colorScheme'>>;

function PaperButton({
  colorScheme,
  children,
  rounded = 'xl',
  p = [4, 8],
  minHeight = '48px',
  borderWidth = '1px',
  ...props
}: PaperButtonProps) {
  const { colorMode } = useColorMode();
  const isLightMode = colorMode === 'light';
  const bg = useAlpha(`${colorScheme}.600`, isLightMode ? 0.08 : 0.16);
  const hovered = useAlpha(`${colorScheme}.600`, isLightMode ? 0.16 : 0.32);

  return (
    <Button
      rounded={rounded}
      p={p}
      minHeight={minHeight}
      bg={bg}
      borderWidth={borderWidth}
      borderColor={hovered}
      _hover={{ bg: hovered, textDecoration: 'none', ...props._hover }}
      {...props}
    >
      {children}
    </Button>
  );
}

export default PaperButton;
