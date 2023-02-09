import * as React from 'react';
import { MenuRenderer } from '@cieloazul310/sarkara-components';
import Item from './Item';
import MenuGroupWrapper from './MenuGroupWrapper';
import useMenu from '../useMenu';

function DrawerMenu() {
  const menu = useMenu();
  return (
    <MenuRenderer
      menu={menu}
      menuItem={Item}
      MenuGroupWrapper={MenuGroupWrapper}
    />
  );
}

export default DrawerMenu;
