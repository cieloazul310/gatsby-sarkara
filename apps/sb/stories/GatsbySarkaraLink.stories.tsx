import * as React from 'react';
import { VStack } from '@chakra-ui/react';
import { Paper, H1, Paragraph } from '@cieloazul310/sarkara-components';
import { GatsbySarkaraLink } from '@cieloazul310/gatsby-theme-sarkara-components';

export default {
  title: 'GatsbySarkaraLink',
  component: GatsbySarkaraLink,
};

export function Basic() {
  return (
    <VStack spacing={2} alignItems="start">
      <GatsbySarkaraLink href="/">InternalLink</GatsbySarkaraLink>
      <GatsbySarkaraLink href="#hoge">Anchor to section</GatsbySarkaraLink>
      <GatsbySarkaraLink href="https://cieloazul310.github.io">ExternalLink</GatsbySarkaraLink>
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
        <GatsbySarkaraLink href="/">Duis viverra elit eu diam tincidunt</GatsbySarkaraLink> lobortis.
        Proin lorem justo, faucibus et mollis ut, lobortis nec nisi. Ut nisi
        mauris, varius nec metus id,{' '}
        <GatsbySarkaraLink href="https://cieloazul310.github.io">rhoncus scelerisque nisl</GatsbySarkaraLink>. Morbi leo urna, pretium
        quis maximus ut, suscipit at arcu. Maecenas ultrices, risus ac mattis
        malesuada, risus risus aliquet ex, ac condimentum ex enim eget libero.
      </Paragraph>
    </Paper>
  );
}