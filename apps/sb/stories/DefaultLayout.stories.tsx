import * as React from 'react';
import { DefaultLayout } from '@cieloazul310/sarkara-layout';
import { LoremIpsum } from '../components/LoremIpsum';

export default {
  title: 'Default Layout',
  component: DefaultLayout,
};

export function withSimpleChildren() {
  return (
    <DefaultLayout>
      <LoremIpsum />
    </DefaultLayout>
  );
}
