import * as React from 'react';
import { VStack, HStack, Text, useColorMode } from '@chakra-ui/react';
import { PaperButton } from '@cieloazul310/sarkara-components';

export default {
  title: 'PaperButton',
  component: PaperButton,
};

export function Basic() {
  return (
    <PaperButton colorScheme="green">
      <Text>PaperButton</Text>
    </PaperButton>
  );
}

export function ColorSchemes() {
  return (
    <VStack gap={2} align="stretch" p={2}>
      <PaperButton colorScheme="blue">
        Blue
      </PaperButton>
      <PaperButton colorScheme="cyan">
        Cyan
      </PaperButton>
      <PaperButton colorScheme="gray">
        Gray
      </PaperButton>
      <PaperButton colorScheme="green">
        Green
      </PaperButton>
      <PaperButton colorScheme="orange">
        Orange
      </PaperButton>
      <PaperButton colorScheme="pink">
        Pink
      </PaperButton>
      <PaperButton colorScheme="purple">
        Purple
      </PaperButton>
      <PaperButton colorScheme="red">
        Red
      </PaperButton>
      <PaperButton colorScheme="teal">
        Teal
      </PaperButton>
      <PaperButton colorScheme="yellow">
        Yellow
      </PaperButton>
    </VStack>
  );
}


export function Horizonal() {
  return (
    <VStack gap={2} align="stretch" p={2}>
      <HStack gap={2}>
        <PaperButton colorScheme="blue">
          Blue
        </PaperButton>
        <PaperButton colorScheme="cyan">
          Cyan
        </PaperButton>
        <PaperButton colorScheme="gray">
          Gray
        </PaperButton>
      </HStack>
      <HStack gap={2}>
        <PaperButton colorScheme="green">
          Green
        </PaperButton>
        <PaperButton colorScheme="orange">
          Orange
        </PaperButton>
        <PaperButton colorScheme="pink">
          Pink
        </PaperButton>
      </HStack>
      <HStack gap={2}>
        <PaperButton colorScheme="purple">
          Purple
        </PaperButton>
        <PaperButton colorScheme="red">
          Red
        </PaperButton>
        <PaperButton colorScheme="teal">
          Teal
        </PaperButton>
      </HStack>
      <HStack gap={2}>
        <PaperButton colorScheme="yellow">
          Yellow
        </PaperButton>
      </HStack>
    </VStack>
  );
}

export function ColorMode() {
  const { colorMode, toggleColorMode } = useColorMode();

  return <PaperButton colorScheme="primary" onClick={toggleColorMode}>{colorMode === 'light' ? 'Light' : 'Dark'}</PaperButton>
}
