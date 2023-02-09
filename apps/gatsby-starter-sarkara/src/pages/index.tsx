import * as React from 'react';
import { SarkaraLayout, H2, Paragraph, Paper, Seo } from '@cieloazul310/gatsby-theme-sarkara';

function IndexPage() {
  return (
    <SarkaraLayout title="Gatsby Sarkara">
      <Paper as="article">
        <H2>Gatsby Starter Sarkara</H2>
        <Paragraph>Chakra UI Extension</Paragraph>
      </Paper>
    </SarkaraLayout>
  );
}

export default IndexPage;

export function Head() {
  return <Seo />;
}
