import * as React from 'react';
import { BasicLayout, Paper, H2, Paragraph } from '@cieloazul310/sarkara';

function Page() {
  return (
    <BasicLayout title="Vite SSR">
      <Paper>
        <H2>Vite SSR example</H2>
        <Paragraph>
          This is Vite SSR example built with Sarkara Theming.
        </Paragraph>
      </Paper>
    </BasicLayout>
  );
}

export { Page };
