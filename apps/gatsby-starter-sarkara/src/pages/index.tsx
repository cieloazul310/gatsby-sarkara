import * as React from 'react';
import { SarkaraLayout, H2, Paragraph, Paper, GatsbySeo } from '@cieloazul310/gatsby-theme-sarkara';

function IndexPage() {
  return (
    <SarkaraLayout title="Gatsby Sarkara" description="A Gatsby theme based on Chakra UI.">
      <Paper as="article">
        <H2>Gatsby Starter Sarkara</H2>
        <Paragraph>Chakra UI Extension</Paragraph>
      </Paper>
    </SarkaraLayout>
  );
}

export default IndexPage;

export function Head() {
  return <GatsbySeo />;
}
