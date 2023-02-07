import * as React from 'react';
import {
  H1,
  H2,
  H3,
  H4,
  Hr,
  Paragraph,
  Blockquote,
  Paper,
  CodeBlock,
  Code,
} from '@cieloazul310/sarkara-components';

export default {
  title: 'Chakra Components',
};

function Article() {
  return (
    <>
      <H1>Article Title</H1>
      <H2>Heading 2</H2>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec quam
        quis nulla dignissim finibus. Morbi aliquam quam ut efficitur feugiat.
        Duis viverra elit eu diam tincidunt lobortis. Proin lorem justo,
        faucibus et mollis ut, lobortis nec nisi. Ut nisi mauris, varius nec
        metus id, rhoncus scelerisque nisl. Morbi leo urna, pretium quis maximus
        ut, suscipit at arcu. Maecenas ultrices, risus ac mattis malesuada,
        risus risus aliquet ex, ac condimentum ex enim eget libero. Sed
        fermentum rutrum urna, vitae suscipit nunc tempus eget. Orci varius
        natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus. Suspendisse luctus mattis dui, quis eleifend enim convallis eget.
        Phasellus nec luctus leo. Proin condimentum felis nec luctus egestas. In
        in sagittis augue. Quisque feugiat ac diam et laoreet. Curabitur a
        tempus arcu. Vivamus vulputate posuere vehicula.
      </Paragraph>
      <H2>Heading 2</H2>
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
      <Hr />
      <H2>Heading 2</H2>
      <Paragraph>
        Proin condimentum felis nec luctus egestas. In in sagittis augue.
        Quisque feugiat ac diam et laoreet. Curabitur a tempus arcu. Vivamus
        vulputate posuere vehicula.
      </Paragraph>
      <Paragraph>
        Proin condimentum felis nec luctus egestas. In in sagittis augue.
        Quisque feugiat ac diam et laoreet. Curabitur a tempus arcu. Vivamus
        vulputate posuere vehicula.
      </Paragraph>
      <H3>Heading 3</H3>
      <Paragraph>
        Proin condimentum felis nec luctus egestas. In in sagittis augue.
        Quisque feugiat ac diam et laoreet. Curabitur a tempus arcu. Vivamus
        vulputate posuere vehicula.
      </Paragraph>
      <Paragraph>
        Proin condimentum felis nec luctus egestas. In in sagittis augue.
        Quisque feugiat ac diam et laoreet. Curabitur a tempus arcu. Vivamus
        vulputate posuere vehicula.
      </Paragraph>
      <H4>Heading 4</H4>
      <Paragraph>
        Proin condimentum felis nec luctus egestas. In in sagittis augue.
        Quisque feugiat ac diam et laoreet. Curabitur a tempus arcu. Vivamus
        vulputate posuere vehicula.
      </Paragraph>
      <Paragraph>
        Proin condimentum felis nec luctus egestas. In in sagittis augue.
        Quisque feugiat ac diam et laoreet. Curabitur a tempus arcu. Vivamus
        vulputate posuere vehicula.
      </Paragraph>
      <H4>Heading 4</H4>
      <Blockquote>
        <Paragraph>
          Sed fermentum rutrum urna, vitae suscipit nunc tempus eget. Orci
          varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Suspendisse luctus mattis dui, quis eleifend enim
          convallis eget. Phasellus nec luctus leo.
        </Paragraph>
      </Blockquote>
      <Blockquote>
        <Paragraph>
          Sed fermentum rutrum urna, vitae suscipit nunc tempus eget. Orci
          varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Suspendisse luctus mattis dui, quis eleifend enim
          convallis eget. Phasellus nec luctus leo.
        </Paragraph>
      </Blockquote>
      <Paragraph>
        Proin condimentum felis nec luctus egestas. In in sagittis augue.
        Quisque feugiat ac diam et laoreet. Curabitur a tempus arcu. Vivamus
        vulputate posuere vehicula.
      </Paragraph>
      <H3>Heading 3</H3>
      <Blockquote>
        <H2>In Blockquote</H2>
        <Paragraph>
          Sed fermentum rutrum urna, vitae suscipit nunc tempus eget. Orci
          varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Suspendisse luctus mattis dui, quis eleifend enim
          convallis eget. Phasellus nec luctus leo.
        </Paragraph>
        <H3>In Blokquote Heading 3</H3>
        <Paragraph>
          Sed fermentum rutrum urna, vitae suscipit nunc tempus eget. Orci
          varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Suspendisse luctus mattis dui, quis eleifend enim
          convallis eget. Phasellus nec luctus leo.
        </Paragraph>
      </Blockquote>
      <H4>Example Code</H4>
      <CodeBlock>import * as React from 'react';</CodeBlock>
      <Paragraph>
        Lorem <Code>Ipsum</Code> dolor sit amet, consectetur adipiscing elit.
      </Paragraph>
    </>
  );
}

export function Basic() {
  return <Article />;
}

export function InPaper() {
  return (
    <Paper>
      <Article />
    </Paper>
  );
}
