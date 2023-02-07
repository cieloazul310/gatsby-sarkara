import * as React from 'react';
import { VStack, Text, useColorMode } from '@chakra-ui/react';
import { PaperButtonLink } from '@cieloazul310/gatsby-theme-sarkara-components';

export default {
  title: 'PaperButtonLink',
  component: PaperButtonLink,
};

export function Basic() {
  return (
    <PaperButtonLink href="/">
      <Text>PaperButtonLink</Text>
    </PaperButtonLink>
  );
}

export function ColorSchemes() {
  return (
    <VStack gap={2} align="stretch" p={2}>
      <PaperButtonLink href="/" colorScheme="blue">Blue</PaperButtonLink>
      <PaperButtonLink href="https://cieloazul310.github.io" colorScheme="cyan">Cyan</PaperButtonLink>
      <PaperButtonLink href="/" colorScheme="gray">Gray</PaperButtonLink>
      <PaperButtonLink href="https://twitter.com" colorScheme="green">Green</PaperButtonLink>
      <PaperButtonLink href="/" colorScheme="orange">Orange</PaperButtonLink>
      <PaperButtonLink href="https://github.com" colorScheme="pink">Pink</PaperButtonLink>
      <PaperButtonLink href="/" colorScheme="purple">Purple</PaperButtonLink>
      <PaperButtonLink href="/" colorScheme="red">Red</PaperButtonLink>
      <PaperButtonLink href="/" colorScheme="teal">Teal</PaperButtonLink>
      <PaperButtonLink href="/" colorScheme="yellow">Yellow</PaperButtonLink>
    </VStack>
  );
}

export function ColorMode() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <PaperButtonLink href="/" colorScheme="primary" onClick={toggleColorMode}>
      {colorMode === 'light' ? 'Light' : 'Dark'}
    </PaperButtonLink>
  );
}
