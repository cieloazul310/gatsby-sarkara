/* eslint react/jsx-props-no-spreading: warn */
import * as React from 'react';
import { Link as GatsbyLink, type GatsbyLinkProps } from 'gatsby';
import {
  useColorMode,
  Link as ChakraLink,
  type LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { usePrimaryToken } from '@cieloazul310/sarkara-components';
import { useIsExternal } from './utils';

export type LinkProps<TState = Record<string, unknown>> = Omit<
  GatsbyLinkProps<TState>,
  'to'
> &
  Omit<ChakraLinkProps, 'href'> &
  Required<Pick<ChakraLinkProps, 'href'>>;

function Link<TState = Record<string, unknown>>({
  href,
  children,
  color,
  ...props
}: LinkProps) {
  const { colorMode } = useColorMode();
  const external = useIsExternal(href);
  const shade = colorMode === 'light' ? 700 : 200;
  const token = usePrimaryToken(shade);

  if (!external) {
    return (
      <ChakraLink
        as={GatsbyLink<TState>}
        color={color ?? token}
        {...props}
        to={href}
      >
        {children}
      </ChakraLink>
    );
  }
  return (
    <ChakraLink href={href} isExternal color={color ?? token} {...props}>
      {children}
      <ExternalLinkIcon mx="2px" />
    </ChakraLink>
  );
}

export default Link;
