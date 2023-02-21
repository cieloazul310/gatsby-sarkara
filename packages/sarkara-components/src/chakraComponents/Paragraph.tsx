/* eslint react/jsx-props-no-spreading: warn */
import * as React from 'react';
import {
  forwardRef,
  chakra,
  Text,
  Link as ChakraLink,
  Code as ChakraCode,
  Divider,
  type TextProps,
  type LinkProps as ChakraLinkProps,
  type DividerProps,
  type CodeProps,
  type ChakraProps,
  type ComponentWithAs,
  type As,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
  useAlpha,
  usePrimaryToken,
  useSecondaryToken,
  useIsExternal,
} from '../utils';

const ChakraBlockquote = chakra('blockquote');

export const Paragraph: ComponentWithAs<As<any>, TextProps> = forwardRef<
  TextProps,
  'p'
>((props, ref) => <Text my={4} ref={ref} {...props} />);

export const SarkaraLink: ComponentWithAs<
  As<any>,
  ChakraLinkProps
> = forwardRef<ChakraLinkProps, 'a'>(({ href, children, ...props }, ref) => {
  const isExternal = useIsExternal(href ?? '/');

  if (!isExternal) {
    <ChakraLink ref={ref} href={href} {...props}>
      {children}
    </ChakraLink>;
  }
  return (
    <ChakraLink ref={ref} href={href} isExternal {...props}>
      {children}
      <ExternalLinkIcon mx="2px" />
    </ChakraLink>
  );
});

export const Hr: ComponentWithAs<'hr', DividerProps> = forwardRef<
  DividerProps,
  'hr'
>((props, ref) => <Divider my={8} ref={ref} {...props} />);

export const Code: ComponentWithAs<'code', CodeProps> = forwardRef<
  CodeProps,
  'code'
>((props, ref) => {
  const token = useSecondaryToken();
  return <ChakraCode colorScheme={token} ref={ref} {...props} />;
});

export const CodeBlock: ComponentWithAs<'pre', CodeProps> = forwardRef<
  CodeProps,
  'pre'
>((props, ref) => {
  const bgBase = usePrimaryToken(600);
  const bg = useAlpha(bgBase, 0.1);
  return (
    <ChakraCode
      as="pre"
      ref={ref}
      overflowX="scroll"
      display="block"
      bg={bg}
      whiteSpace="pre"
      rounded="xl"
      {...props}
      px={[2, 2, 4]}
      py={8}
      my={4}
    />
  );
});

export const Blockquote: ComponentWithAs<'blockquote', ChakraProps> =
  forwardRef<ChakraProps, 'blockquote'>((props, ref) => {
    const bgBase = usePrimaryToken(600);
    const bg = useAlpha(bgBase, 0.1);
    return (
      <ChakraBlockquote
        ref={ref}
        my={4}
        bg={bg}
        px={[2, 2, 4]}
        py={[4, 8]}
        rounded="xl"
        {...props}
      />
    );
  });
