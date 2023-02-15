/* eslint react/jsx-props-no-spreading: warn */
import * as React from 'react';
import {
  chakra,
  Heading,
  Text,
  OrderedList,
  UnorderedList,
  ListItem,
  Code as ChakraCode,
  AspectRatio,
  Link as ChakraLink,
  Divider,
} from '@chakra-ui/react';
import type { MDXComponents } from 'mdx/types';
import { useAlpha, usePrimaryToken, useSecondaryToken } from './utils';

const ChakraImg = chakra('img');
const ChakraIframe = chakra('iframe');

const firstStyle = {
  mt: 4,
};

export function Paragraph(props: Record<string, any>) {
  return <Text my={4} {...props} />;
}

export function H1({ _first, ...props }: Record<string, any>) {
  return (
    <Heading
      as="h1"
      mt={8}
      mb={8}
      size="xl"
      _first={{ ..._first, ...firstStyle }}
      {...props}
    />
  );
}

export function H2({ _first, ...props }: Record<string, any>) {
  const borderBottomColor = usePrimaryToken(400);
  return (
    <Heading
      as="h2"
      mt={8}
      mb={4}
      size="lg"
      borderBottomWidth="1px"
      borderBottomColor={borderBottomColor}
      _first={{ ..._first, ...firstStyle }}
      {...props}
    />
  );
}

export function H3({ _first, ...props }: Record<string, any>) {
  return (
    <Heading
      as="h3"
      mt={8}
      mb={4}
      size="md"
      _first={{ ..._first, ...firstStyle }}
      {...props}
    />
  );
}

export function H4({ _first, ...props }: Record<string, any>) {
  return <Heading as="h4" mt={4} mb={4} size="sm" {...props} />;
}

export function H5(props: Record<string, any>) {
  return <Heading as="h5" mt={4} mb={4} size="sm" {...props} />;
}

export function H6(props: Record<string, any>) {
  return (
    <Heading as="h6" mt={4} mb={4} size="sm" fontWeight="normal" {...props} />
  );
}

export function Hr(props: Record<string, any>) {
  return <Divider my={8} {...props} />;
}

export function Ul(props: Record<string, any>) {
  return <UnorderedList my={4} {...props} />;
}

export function Ol(props: Record<string, any>) {
  return <OrderedList my={4} {...props} />;
}

export function Li(props: Record<string, any>) {
  return <ListItem {...props} />;
}

export function Iframe({ width, height, ...props }: Record<string, any>) {
  return (
    <AspectRatio ratio={[1, 16 / 9]}>
      <ChakraIframe {...props} />
    </AspectRatio>
  );
}

export function Img({ src, ...props }: Record<string, any>) {
  return (
    <ChakraLink
      href={src}
      isExternal
      transition="filter .25s"
      _hover={{ filter: 'brightness(1.1)' }}
    >
      <ChakraImg my={4} {...props} />
    </ChakraLink>
  );
}

export function Code(props: Record<string, any>) {
  const token = useSecondaryToken();
  return <ChakraCode colorScheme={token} {...props} />;
}

export function Blockquote(props: Record<string, any>) {
  const bgBase = usePrimaryToken(600);
  const bg = useAlpha(bgBase, 0.1);
  return (
    <Text
      as="blockquote"
      my={4}
      bg={bg}
      px={[2, 2, 4]}
      py={8}
      rounded="xl"
      {...props}
    />
  );
}

export function CodeBlock(props: Record<string, any>) {
  const bgBase = usePrimaryToken(600);
  const bg = useAlpha(bgBase, 0.1);
  return (
    <ChakraCode
      as="pre"
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
}

export const chakraComponents: MDXComponents = {
  p: Paragraph,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  ul: Ul,
  ol: Ol,
  li: Li,
  blockquote: Blockquote,
  a: ({ href, ...props }: Record<string, any>) => (
    <ChakraLink href={href} {...props} />
  ),
  img: Img,
  iframe: Iframe,
  code: Code,
  pre: CodeBlock,
  hr: Hr,
};
