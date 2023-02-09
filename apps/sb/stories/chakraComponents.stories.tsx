import * as React from 'react';
import {
  H1,
  H2,
  H3,
  H4,
  Hr,
  Paragraph,
  Blockquote,
  Paper,
  CodeBlock,
  Code,
} from '@cieloazul310/sarkara-components';
import { LoremIpsum, LoremIpsumJa } from '../components/LoremIpsum';

export default {
  title: 'Chakra Components',
};

export function Basic() {
  return <LoremIpsum />;
}

export function BasicJa() {
  return <LoremIpsumJa />
}

export function InPaper() {
  return (
    <Paper>
      <LoremIpsum />
    </Paper>
  );
}

export function InPaperJa() {
  return (
    <Paper>
      <LoremIpsumJa />
    </Paper>
  );
}
