import * as React from 'react';
import { VStack } from '@chakra-ui/react';
import { MenuRenderer } from '@cieloazul310/sarkara-components';
import MenuGroupWrapper from './MenuGroupWrapper';
import Item from './Item';
import useMenu from '../useMenu';

type SidebarProps = {
  sidebarContents?: React.ReactNode;
  additionalMenu?: React.ReactNode;
};

function Sidebar({ sidebarContents, additionalMenu }: SidebarProps) {
  const menu = useMenu();
  return (
    <>
      {sidebarContents}
      <VStack as="nav" spacing={2} align="stretch">
        {additionalMenu}
        <MenuRenderer
          menu={menu}
          MenuGroupWrapper={MenuGroupWrapper}
          menuItem={Item}
        />
      </VStack>
    </>
  );
}

Sidebar.defaultProps = {
  sidebarContents: undefined,
  additionalMenu: undefined,
};

export default Sidebar;
