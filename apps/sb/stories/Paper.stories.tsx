import * as React from 'react';
import { VStack, Text, useToken } from '@chakra-ui/react';
import {
  Paper,
  Paragraph,
  H2,
  H3,
  type PaperProps,
} from '@cieloazul310/sarkara-components';

export default {
  title: 'Paper',
  component: Paper,
};

function Article({ colorSchemes }: PaperProps) {
  const [primary] = useToken('colors', [`${colorSchemes}.400`]);
  return (
    <Paper
      as="article"
      colorSchemes={colorSchemes}
      sx={{ '--chakra-colors-primary-400': primary }}
    >
      <H2>{colorSchemes}</H2>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec quam
        quis nulla dignissim finibus. Morbi aliquam quam ut efficitur feugiat.
        Duis viverra elit eu diam tincidunt lobortis. Proin lorem justo,
        faucibus et mollis ut, lobortis nec nisi. Ut nisi mauris, varius nec
        metus id, rhoncus scelerisque nisl. Morbi leo urna, pretium quis maximus
        ut, suscipit at arcu. Maecenas ultrices, risus ac mattis malesuada,
        risus risus aliquet ex, ac condimentum ex enim eget libero.
      </Paragraph>
      <H3>Heading 3</H3>
      <Paragraph>
        Sed fermentum rutrum urna, vitae suscipit nunc tempus eget. Orci varius
        natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus. Suspendisse luctus mattis dui, quis eleifend enim convallis eget.
        Phasellus nec luctus leo.
      </Paragraph>
    </Paper>
  );
}

export function Basic() {
  return (
    <Paper>
      <Text>Paper</Text>
    </Paper>
  );
}

export function ColorSchemes() {
  const colors = ['blue', 'cyan', 'gray', 'green', 'orange', 'pink', 'purple', 'red', 'teal', 'yellow'];
  return (
    <VStack gap={2} align="stretch" p={2}>
      {colors.map((color) => (
        <Article key={color} colorSchemes={color} />
      ))}
    </VStack>
  );
}
