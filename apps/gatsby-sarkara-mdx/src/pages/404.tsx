import * as React from 'react';
import {
  SarkaraLayout,
  Paragraph,
  Paper,
  Seo,
} from '@cieloazul310/gatsby-theme-sarkara';

function NotFoundPage() {
  return (
    <SarkaraLayout title="404 Not Found">
      <Paper>
        <Paragraph>Chakra UI Extension</Paragraph>
      </Paper>
    </SarkaraLayout>
  );
}

export default NotFoundPage;

export function Head() {
  return <Seo title="404 Not Found" />;
}
