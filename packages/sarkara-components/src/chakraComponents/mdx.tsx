/* eslint react/jsx-props-no-spreading: warn */
import { Thead, Tbody, Tfoot, Tr } from '@chakra-ui/react';
import type { MDXComponents } from 'mdx/types';
import { Paragraph, Hr, Code, CodeBlock, Blockquote } from './Paragraph';
import { H1, H2, H3, H4, H5, H6 } from './Heading';
import { Ol, Ul, Li } from './List';
import { Iframe, Img } from './Media';
import SarkaraLink from './SarkaraLink';
import SarkaraTable, { Th, Td } from './Table';

const chakraComponents: MDXComponents = {
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
  a: SarkaraLink,
  img: Img,
  iframe: Iframe,
  code: Code,
  pre: CodeBlock,
  hr: Hr,
  table: SarkaraTable,
  thead: Thead,
  tbody: Tbody,
  tfoot: Tfoot,
  tr: Tr,
  th: Th,
  td: Td,
};

export default chakraComponents;
