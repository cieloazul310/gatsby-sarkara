import * as React from 'react';
import { VStack } from '@chakra-ui/react';
import {
  Paper,
  H1,
  Paragraph,
  SarkaraLink,
} from '@cieloazul310/sarkara-components';

export default {
  title: 'SarkaraLink',
  component: SarkaraLink,
};

export function Basic() {
  return (
    <VStack spacing={2} alignItems="start">
      <SarkaraLink href="/">InternalLink</SarkaraLink>
      <SarkaraLink href="#hoge">Anchor to section</SarkaraLink>
      <SarkaraLink href="https://cieloazul310.github.io">
        ExternalLink
      </SarkaraLink>
    </VStack>
  );
}

export function Inline() {
  return (
    <Paper>
      <H1>Inline</H1>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec quam
        quis nulla dignissim finibus. Morbi aliquam quam ut efficitur feugiat.{' '}
        <SarkaraLink href="#hoge">
          Duis viverra elit eu diam tincidunt
        </SarkaraLink>{' '}
        lobortis. Proin lorem justo, faucibus et mollis ut, lobortis nec nisi.
        Ut nisi mauris, varius nec metus id,{' '}
        <SarkaraLink href="https://cieloazul310.github.io">
          rhoncus scelerisque nisl
        </SarkaraLink>
        . Morbi leo urna, pretium quis maximus ut, suscipit at arcu. Maecenas
        ultrices, risus ac mattis malesuada, risus risus aliquet ex, ac
        condimentum ex enim eget libero.
      </Paragraph>
    </Paper>
  );
}
