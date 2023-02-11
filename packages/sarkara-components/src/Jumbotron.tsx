/* eslint react/jsx-props-no-spreading: warn */
import * as React from 'react';
import { Box, Container, Heading, type BoxProps } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useGradientBox, useJumbotronSizes } from './utils';

export type JumbotronProps = BoxProps & {
  title?: string;
  description?: string;
  disableFade?: boolean;
};

function Jumbotron({
  title,
  description,
  children,
  as = 'header',
  flexDirection = 'column',
  alignItems = 'center',
  justifyContent = 'center',
  px = 4,
  disableFade = false,
  height,
  pb,
  ...props
}: JumbotronProps) {
  const { color, bgGradient } = useGradientBox();
  const sizes = useJumbotronSizes('480px');
  console.log(sizes);

  return (
    <Box
      as={as}
      height={height ?? sizes.height}
      px={px}
      color={props.color ?? color}
      bgGradient={props.bgGradient ?? bgGradient}
      {...props}
    >
      <Container
        as={motion.div}
        display="flex"
        flexDirection={flexDirection}
        alignItems={alignItems}
        justifyContent={justifyContent}
        height={height ?? sizes.height}
        maxWidth="container.xl"
        pb={pb ?? sizes.pb}
        initial={!disableFade ? { opacity: 0 } : false}
        animate={{ opacity: 1 }}
      >
        {children || (
          <>
            <Heading as="h1" size={['xl', '2xl']} mb={2}>
              {title}
            </Heading>
            <Heading as="p" size={['sm', 'md']}>
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
  disableFade: false,
};

export default Jumbotron;
