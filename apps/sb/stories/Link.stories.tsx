import * as React from 'react';
// import { VStack } from '@chakra-ui/react';
import { Paper, H1, Paragraph } from '@cieloazul310/sarkara-components';
import { Link } from '@cieloazul310/gatsby-theme-sarkara-components';

export default {
  title: 'Link',
  component: Link,
};

export function Basic() {
  return <Link href="/">Link</Link>
}

export function Inline() {
  return (
    <Paper>
      <H1>Inline</H1>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec quam
        quis nulla dignissim finibus. Morbi aliquam quam ut efficitur feugiat.{' '}
        <Link href="/">Duis viverra elit eu diam tincidunt</Link> lobortis.
        Proin lorem justo, faucibus et mollis ut, lobortis nec nisi. Ut nisi
        mauris, varius nec metus id,{' '}
        <Link href="https://cieloazul310.github.io">rhoncus scelerisque nisl</Link>. Morbi leo urna, pretium
        quis maximus ut, suscipit at arcu. Maecenas ultrices, risus ac mattis
        malesuada, risus risus aliquet ex, ac condimentum ex enim eget libero.
      </Paragraph>
    </Paper>
  );
}