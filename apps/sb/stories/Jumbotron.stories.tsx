import * as React from 'react';
import { Heading, Text } from '@chakra-ui/react';
import { Jumbotron } from '@cieloazul310/sarkara-components';

export default {
  title: 'Jumbotron',
  component: Jumbotron,
};

export function Basic() {
  return (
    <Jumbotron
      title="Jumbotron"
      description="Jumbotron is a header component for each page."
      bgGradient="linear(to-r, blue.300, cyan.300)"
    />
  );
}

export function WithChildren() {
  return (
    <Jumbotron color="white" bgGradient="linear(to-r, blue.700, red.200)">
      <Text>With Children</Text>
      <Heading as="h1">Title</Heading>
      <Text>Jumbotron is a header component for each page.</Text>
    </Jumbotron>
  );
}
