import * as React from 'react';
import {
  Box,
  VStack,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  List,
  ListItem,
  Link as ChakraLink,
} from '@chakra-ui/react';
import {
  PaperButton,
  MenuRenderer,
  type Menu,
  type MenuItem,
  type MenuGroupWrapperProps,
} from '@cieloazul310/sarkara-components';

export default {
  title: 'MenuRenderer',
  components: MenuRenderer,
};

const menu: Menu = [
  { title: 'Top', path: '/' },
  { title: 'Page 2', path: '/page-2' },
  { title: 'Page 3', path: '/page-3' },
];

const nestedMenu: Menu = [
  ...menu,
  { title: 'Nested', items: menu },
  { title: 'Nested-2', items: menu },
];

function Wrapper({ children, title }: MenuGroupWrapperProps) {
  return (
    <VStack spacing={2} align="stretch">
      <Heading as="h4" size="md">
        {title}
      </Heading>
      {children}
    </VStack>
  );
}

function renderBasicMenuItem(item: MenuItem) {
  return <PaperButton key={item.path}>{item.title}</PaperButton>;
}

export function Basic() {
  return (
    <VStack as="nav" spacing={4} align="stretch">
      <MenuRenderer
        menu={menu}
        menuItem={renderBasicMenuItem}
        MenuGroupWrapper={Wrapper}
      />
    </VStack>
  );
}

export function Nested() {
  return (
    <VStack as="nav" spacing={4} align="stretch">
      <MenuRenderer
        menu={nestedMenu}
        menuItem={renderBasicMenuItem}
        MenuGroupWrapper={Wrapper}
      />
    </VStack>
  );
}

const colorMenu: Menu<{ color: string }> = [
  { title: 'Top', path: '/', color: 'blue' },
  { title: 'Page 2', path: '/page-2', color: 'cyan' },
  { title: 'Page 3', path: '/page-3', color: 'orange' },
];

function renderColorsMenuItem(item: MenuItem<{ color: string }>) {
  return (
    <PaperButton key={item.path} colorScheme={item.color}>
      {item.title}
    </PaperButton>
  );
}

export function Colors() {
  return (
    <VStack as="nav" spacing={4} align="stretch">
      <MenuRenderer
        menu={colorMenu}
        menuItem={renderColorsMenuItem}
        MenuGroupWrapper={Wrapper}
      />
    </VStack>
  );
}

function WithAccordionWrapper({ children, title }: MenuGroupWrapperProps) {
  return (
    <AccordionItem>
      <AccordionButton>
        <Box as="span" flex="1" textAlign="left">
          {title}
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel>
        <List>{children}</List>
      </AccordionPanel>
    </AccordionItem>
  );
}

function renderListItem(item: MenuItem) {
  return (
    <ListItem key={item.path}>
      <ChakraLink>{item.title}</ChakraLink>
    </ListItem>
  );
}

export function WithAccordion() {
  return (
    <Accordion>
      <List>
        <MenuRenderer
          menu={nestedMenu}
          menuItem={renderListItem}
          MenuGroupWrapper={WithAccordionWrapper}
        />
      </List>
    </Accordion>
  );
}
