/* eslint react/jsx-props-no-spreading: warn */
import * as React from 'react';
import {
  forwardRef,
  Link as ChakraLink,
  useColorModeValue,
  type LinkProps as ChakraLinkProps,
  type ComponentWithAs,
  type As,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { usePrimaryToken, useIsInternal } from '../utils';

const SarkaraLink: ComponentWithAs<As<any>, ChakraLinkProps> = forwardRef<
  ChakraLinkProps,
  'a'
>(({ href, color, children, ...props }, ref) => {
  const isInternal = useIsInternal(href ?? '/');
  const isLinkToSection = (href ?? '/').slice(0, 1) === '#';
  const shade = useColorModeValue(600, 200);
  const token = usePrimaryToken(shade);

  if (isInternal || isLinkToSection) {
    return (
      <ChakraLink ref={ref} href={href} color={color ?? token} {...props}>
        {children}
      </ChakraLink>
    );
  }
  return (
    <ChakraLink
      ref={ref}
      href={href}
      isExternal
      color={color ?? token}
      {...props}
    >
      {children}
      <ExternalLinkIcon mx="2px" />
    </ChakraLink>
  );
});

export default SarkaraLink;
