import * as React from 'react';
import { Heading, Text } from '@chakra-ui/react';
import { Jumbotron, useGradient } from '@cieloazul310/sarkara-components';

export default {
  title: 'Jumbotron',
  component: Jumbotron,
};

export function Basic() {
  return (
    <Jumbotron
      title="Jumbotron"
      description="Jumbotron is a header component for each page."
    />
  );
}

export function WithChildren() {
  const bgGradient = useGradient('blue.700', 'red.200');
  return (
    <Jumbotron color="white" bgGradient={bgGradient}>
      <Text>With Children</Text>
      <Heading as="h1">Title</Heading>
      <Text>Jumbotron is a header component for each page.</Text>
    </Jumbotron>
  );
}

export function DisableFade() {
  const bgGradient = useGradient('blue.700', 'red.200');
  return (
    <Jumbotron title="Disale Fade" color="white" bgGradient={bgGradient} disableFade />
  );
}
