import * as React from 'react';
import { VStack, Heading, Text } from '@chakra-ui/react';
import { Paper } from '@cieloazul310/sarkara-components';

export default {
  title: 'Paper',
  component: Paper,
};

export function Basic() {
  return (
    <Paper colorScheme="green">
      <Text>Paper</Text>
    </Paper>
  );
}

export function ColorSchemes() {
  return (
    <VStack gap={2} align="stretch" p={2}>
      <Paper colorScheme="blue" as="article">
        <Heading as="h2" size="md">
          Blue
        </Heading>
        <Text>Text</Text>
      </Paper>
      <Paper colorScheme="cyan" as="article">
        <Heading as="h2" size="md">
          Cyan
        </Heading>
        <Text>Text</Text>
      </Paper>
      <Paper colorScheme="gray" as="article">
        <Heading as="h2" size="md">
          Gray
        </Heading>
        <Text>Text</Text>
      </Paper>
      <Paper colorScheme="green" as="article">
        <Heading as="h2" size="md">
          Green
        </Heading>
        <Text>Text</Text>
      </Paper>
      <Paper colorScheme="orange" as="article">
        <Heading as="h2" size="md">
          Orange
        </Heading>
        <Text>Text</Text>
      </Paper>
      <Paper colorScheme="pink" as="article">
        <Heading as="h2" size="md">
          Pink
        </Heading>
        <Text>Text</Text>
      </Paper>
      <Paper colorScheme="purple" as="article">
        <Heading as="h2" size="md">
          Purple
        </Heading>
        <Text>Text</Text>
      </Paper>
      <Paper colorScheme="red" as="article">
        <Heading as="h2" size="md">
          Red
        </Heading>
        <Text>Text</Text>
      </Paper>
      <Paper colorScheme="teal" as="article">
        <Heading as="h2" size="md">
          Teal
        </Heading>
        <Text>Text</Text>
      </Paper>
      <Paper colorScheme="yellow" as="article">
        <Heading as="h2" size="md">
          Yellow
        </Heading>
        <Text>Text</Text>
      </Paper>
    </VStack>
  );
}
