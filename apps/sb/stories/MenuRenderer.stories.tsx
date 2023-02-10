/* eslint react/jsx-props-no-spreading: warn */
import * as React from 'react';
import {
  Box,
  VStack,
  Heading,
  Text,
  Link as ChakraLink,
  useDisclosure,
  useColorModeValue,
} from '@chakra-ui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
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
  { title: 'Top', path: '/' },
  { title: 'Page 2', path: '/page-2' },
  {
    title: 'Nested',
    items: [
      { title: 'Page 3', path: '/page-3' },
      { title: 'Page 4', path: '/page-4' },
    ],
  },
  {
    title: 'Nested-2',
    items: [
      { title: 'page 5', path: '/page-5' },
      { title: 'Page 6', path: '/page-6' },
    ],
  },
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
  const { getDisclosureProps, getButtonProps, isOpen } = useDisclosure();
  const disclosureProps = getDisclosureProps();
  const buttonProps = getButtonProps();
  const bgColor = useColorModeValue('gray.100', 'gray.700');
  const icon = isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />;

  return (
    <Box>
      <Box
        as="button"
        {...buttonProps}
        _hover={{ bgColor }}
        p={2}
        width="100%"
        display="flex"
        alignItems="center"
      >
        {icon}
        <Text ml={2}>{title}</Text>
      </Box>
      <Box {...disclosureProps} pl={4}>
        {children}
      </Box>
    </Box>
  );
}

function renderListItem(item: MenuItem) {
  const bgColor = useColorModeValue('gray.100', 'gray.700');

  return (
    <Box key={item.path} p={2} _hover={{ bgColor }}>
      <ChakraLink>{item.title}</ChakraLink>
    </Box>
  );
}

export function WithAccordion() {
  return (
    <VStack spacing={2} align="stretch">
      <MenuRenderer
        menu={nestedMenu}
        menuItem={renderListItem}
        MenuGroupWrapper={WithAccordionWrapper}
      />
    </VStack>
  );
}
