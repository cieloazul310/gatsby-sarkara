import * as React from 'react';
import { SarkaraLayout, H1, Paragraph, Paper, Seo } from '@cieloazul310/gatsby-theme-sarkara';

function IndexPage() {
  return (
    <SarkaraLayout title="Gatsby Sarkara">
      <Paper>
        <H1>Gatsby Starter Sarkara</H1>
        <Paragraph>Chakra UI Extension</Paragraph>
      </Paper>
    </SarkaraLayout>
  );
}

export default IndexPage;

export function Head() {
  return <Seo />;
}
