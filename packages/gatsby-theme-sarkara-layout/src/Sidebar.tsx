import * as React from 'react';
import { VStack } from '@chakra-ui/react';
import {
  MenuRenderer,
  type MenuItem,
  type MenuGroupWrapperProps,
} from '@cieloazul310/sarkara-components';
import { PaperButtonLink } from '@cieloazul310/gatsby-theme-sarkara-components';
import menu from './menu';

type SidebarProps = {
  sidebarContents?: React.ReactNode;
};

function MenuGroupWrapper({ children }: MenuGroupWrapperProps) {
  return (
    <VStack spacing={2} align="stretch">
      {children}
    </VStack>
  );
}

function Item({ path, title }: MenuItem) {
  return (
    <PaperButtonLink key={path} href={path}>
      {title}
    </PaperButtonLink>
  );
}

function Sidebar({ sidebarContents }: SidebarProps) {
  return (
    <>
      {sidebarContents}
      <VStack as="nav" spacing={4} align="stretch">
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
};

export default Sidebar;
