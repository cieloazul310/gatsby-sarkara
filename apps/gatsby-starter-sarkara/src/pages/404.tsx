import * as React from 'react';
import {
  GatsbySarkaraLayout,
  Paragraph,
  Paper,
  GatsbySeo,
} from '@cieloazul310/gatsby-theme-sarkara';

function NotFoundPage() {
  return (
    <GatsbySarkaraLayout title="404 Not Found">
      <Paper>
        <Paragraph>Chakra UI Extension</Paragraph>
      </Paper>
    </GatsbySarkaraLayout>
  );
}

export default NotFoundPage;

export function Head() {
  return <GatsbySeo title="404 Not Found" />;
}
