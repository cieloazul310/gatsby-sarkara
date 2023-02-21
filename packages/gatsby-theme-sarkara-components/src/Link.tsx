/* eslint react/jsx-props-no-spreading: warn */
import * as React from 'react';
import { Link as GatsbyLink, type GatsbyLinkProps } from 'gatsby';
import {
  forwardRef,
  type LinkProps as ChakraLinkProps,
  type ComponentWithAs,
  type As,
} from '@chakra-ui/react';
import { SarkaraLink, useIsInternal } from '@cieloazul310/sarkara-components';

export type GatsbySarkaraLinkProps<
  TState extends object = Record<string, unknown>
> = Omit<GatsbyLinkProps<TState>, 'to'> &
  Omit<ChakraLinkProps, 'href'> &
  Required<Pick<ChakraLinkProps, 'href'>>;

const GatsbySarkaraLink: ComponentWithAs<
  As<any>,
  GatsbySarkaraLinkProps
> = forwardRef<GatsbySarkaraLinkProps, As>(
  ({ href, children, ...props }, ref) => {
    const internal = useIsInternal(href);

    if (internal) {
      return (
        <SarkaraLink as={GatsbyLink} ref={ref} {...props} to={href}>
          {children}
        </SarkaraLink>
      );
    }

    return (
      <SarkaraLink ref={ref} href={href} {...props}>
        {children}
      </SarkaraLink>
    );
  }
);

export default GatsbySarkaraLink;
