/* eslint react/jsx-props-no-spreading: warn */
/* eslint no-underscore-dangle: warn */
import * as React from 'react';
import { Link as GatsbyLink, type GatsbyLinkProps } from 'gatsby';
import { Button, useColorMode, type ButtonProps } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { useAlpha, usePrimaryToken } from '@cieloazul310/sarkara-components';
import { useIsExternal } from './utils';

export type PaperButtonLinkProps<TState = Record<string, unknown>> = Omit<
  GatsbyLinkProps<TState>,
  'ref' | 'to'
> &
  ButtonProps & {
    href: string;
  };

function PaperButtonLink<TState = Record<string, unknown>>({
  href,
  children,
  colorScheme,
  rounded = 'xl',
  p = [4, 8],
  minHeight = '48px',
  ...props
}: PaperButtonLinkProps<TState>) {
  const { colorMode } = useColorMode();
  const token = usePrimaryToken(600);
  const bgBase = colorScheme ? `${colorScheme}.600` : token;
  const isLightMode = colorMode === 'light';
  const bg = useAlpha(bgBase, isLightMode ? 0.08 : 0.16);
  const hovered = useAlpha(bgBase, isLightMode ? 0.16 : 0.32);
  const external = useIsExternal(href);

  if (!external) {
    return (
      <Button
        as={GatsbyLink<TState>}
        to={href}
        rounded={rounded}
        p={p}
        minHeight={minHeight}
        bg={bg}
        borderColor={hovered}
        _hover={{ bg: hovered, textDecoration: 'none', ...props._hover }}
        {...props}
      >
        {children}
      </Button>
    );
  }

  return (
    <Button
      as="a"
      rounded={rounded}
      p={p}
      minHeight={minHeight}
      bg={bg}
      borderColor={hovered}
      _hover={{ bg: hovered, textDecoration: 'none', ...props._hover }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
      <ExternalLinkIcon mx="2px" />
    </Button>
  );
}

export default PaperButtonLink;
