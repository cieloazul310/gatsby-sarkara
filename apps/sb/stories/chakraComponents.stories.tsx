import * as React from 'react';
import { Paper } from '@cieloazul310/sarkara-components';
import { LoremIpsum, LoremIpsumJa } from '../components/LoremIpsum';

export default {
  title: 'Chakra Components',
};

export function Basic() {
  return <LoremIpsum />;
}

export function BasicJa() {
  return <LoremIpsumJa />;
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
