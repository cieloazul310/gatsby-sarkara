/* eslint react/jsx-props-no-spreading: warn */
/* eslint no-underscore-dangle: warn */
import * as React from 'react';
import { Link as GatsbyLink, type GatsbyLinkProps } from 'gatsby';
import { forwardRef, type ComponentWithAs, type As } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
  PaperButton,
  useIsInternal,
  type PaperButtonProps,
} from '@cieloazul310/sarkara-components';

export type PaperButtonLinkProps<
  TState extends object = Record<string, unknown>
> = Omit<GatsbyLinkProps<TState>, 'ref' | 'to'> &
  PaperButtonProps & { href: string };

const PaperButtonLink: ComponentWithAs<
  As<any>,
  PaperButtonLinkProps
> = forwardRef<PaperButtonLinkProps, As>(
  ({ href, children, ...props }, ref) => {
    const internal = useIsInternal(href);

    if (internal) {
      return (
        <PaperButton as={GatsbyLink} ref={ref} to={href} {...props}>
          {children}
        </PaperButton>
      );
    }

    return (
      <PaperButton
        as="a"
        ref={ref}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
        <ExternalLinkIcon mx="2px" />
      </PaperButton>
    );
  }
);

export default PaperButtonLink;
