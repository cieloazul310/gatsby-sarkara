import * as React from 'react';
import { DefaultLayout } from '@cieloazul310/sarkara-layout';

export default {
  title: 'Default Layout',
  component: DefaultLayout,
};

export function withSimpleChildren() {
  return (
    <DefaultLayout>
      <p>hoge</p>
    </DefaultLayout>
  );
}
