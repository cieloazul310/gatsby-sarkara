/* eslint react/jsx-props-no-spreading: warn */
/* eslint no-underscore-dangle: warn */
import * as React from 'react';
import {
  forwardRef,
  Button,
  useColorMode,
  type ButtonProps,
  type As,
  type ComponentWithAs,
} from '@chakra-ui/react';
import { useAlpha, usePrimaryToken } from './utils';

export type PaperButtonProps = ButtonProps;

const PaperButton: ComponentWithAs<As<any>, PaperButtonProps> = forwardRef<
  PaperButtonProps,
  As
>(
  (
    {
      colorScheme,
      children,
      rounded = 'xl',
      p = [4, 8],
      minHeight = '48px',
      ...props
    },
    ref
  ) => {
    const { colorMode } = useColorMode();
    const token = usePrimaryToken(600);
    const bgBase = colorScheme ? `${colorScheme}.600` : token;
    const isLightMode = colorMode === 'light';
    const bg = useAlpha(bgBase, isLightMode ? 0.08 : 0.16);
    const hovered = useAlpha(bgBase, isLightMode ? 0.16 : 0.32);

    return (
      <Button
        rounded={rounded}
        p={p}
        minHeight={minHeight}
        bg={bg}
        borderColor={hovered}
        _hover={{ bg: hovered, textDecoration: 'none', ...props._hover }}
        ref={ref}
        {...props}
      >
        {children}
      </Button>
    );
  }
);

export default PaperButton;
