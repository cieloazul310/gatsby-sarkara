/* eslint react/jsx-props-no-spreading: warn */
import * as React from 'react';
import { Box, Container, Heading, type BoxProps } from '@chakra-ui/react';
import { useGradientBox } from './utils';

export type JumbotronProps = BoxProps & {
  title?: string;
  description?: string;
};

function Jumbotron({
  title,
  description,
  children,
  as = 'header',
  flexDirection = 'column',
  alignItems = 'center',
  justifyContent = 'center',
  height = ['calc(100vh)', '480px'],
  px = 4,
  pb = 0,
  ...props
}: JumbotronProps) {
  const { color, bgGradient } = useGradientBox();
  return (
    <Box
      as={as}
      height={height}
      px={px}
      color={props.color ?? color}
      bgGradient={props.bgGradient ?? bgGradient}
      {...props}
    >
      <Container
        display="flex"
        flexDirection={flexDirection}
        alignItems={alignItems}
        justifyContent={justifyContent}
        height={height}
        maxWidth="container.xl"
        pb={pb}
      >
        {children || (
          <>
            <Heading as="h1" size="2xl" mb={2}>
              {title}
            </Heading>
            <Heading as="p" size="md">
              {description}
            </Heading>
          </>
        )}
      </Container>
    </Box>
  );
}

Jumbotron.defaultProps = {
  title: undefined,
  description: undefined,
};

export default Jumbotron;
