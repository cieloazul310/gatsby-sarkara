import * as React from 'react';
import type { MenuItem } from '@cieloazul310/sarkara-components';
import { PaperButtonLink } from '@cieloazul310/gatsby-theme-sarkara-components';

function Item({ path, title }: MenuItem) {
  return (
    <PaperButtonLink key={path} href={path}>
      {title}
    </PaperButtonLink>
  );
}

export default Item;
