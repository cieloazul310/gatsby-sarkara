import * as React from 'react';
import { GatsbySarkaraLayout, H2, Paragraph, Paper, GatsbySeo } from '@cieloazul310/gatsby-theme-sarkara';

function IndexPage() {
  return (
    <GatsbySarkaraLayout
      title="Gatsby Sarkara"
      description="A Gatsby theme based on Chakra UI."
    >
      <Paper as="article">
        <H2>Gatsby Starter Sarkara</H2>
        <Paragraph>Chakra UI Extension</Paragraph>
      </Paper>
    </GatsbySarkaraLayout>
  );
}

export default IndexPage;

export function Head() {
  return <GatsbySeo />;
}
