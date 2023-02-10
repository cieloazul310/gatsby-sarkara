/* eslint react/jsx-props-no-spreading: warn */
import * as React from 'react';
import {
  Box,
  Heading,
  Text,
  keyframes,
  useDisclosure,
  type BoxProps,
} from '@chakra-ui/react';
import { motion, useInView } from 'framer-motion';

export default {
  title: 'Animation',
};

const animationKeyframes = keyframes`
  0% { background: #fff; }
  14% { background: #f0f; }
  28% { background: #f00; }
  42% { background: #ff0; }
  56% { background: #0f0; }
  70% { background: #0ff; }
  84% { background: #00f; }
  100% { background: #fff; }
`;

const animation = `${animationKeyframes} 10s ease-in-out infinite`;

export function Basic() {
  return (
    <Box as={motion.div} animation={animation} p={8}>
      <Text fontSize="2xl" fontWeight="bold">
        Hello, animation.
      </Text>
    </Box>
  );
}

export function Accordion() {
  const { isOpen, getButtonProps, getDisclosureProps } = useDisclosure();
  const buttonProps = getButtonProps();
  const disclosureProps = getDisclosureProps();
  const variants = {
    open: { opacity: 1, height: 'auto' },
    closed: { opacity: 0, height: 0 },
  };

  return (
    <Box>
      <Box {...buttonProps}>Open</Box>
      <Box
        as={motion.nav}
        bg="gray.50"
        animate={isOpen ? 'open' : 'closed'}
        variants={variants}
        {...disclosureProps}
      >
        <Box py={4}>Hi!</Box>
        <Box py={4}>Hi!</Box>
        <Box py={4}>Hi!</Box>
        <Box py={4}>Hi!</Box>
        <Box py={4}>Hi!</Box>
        <Box py={4}>Hi!</Box>
        <Box py={4}>Hi!</Box>
      </Box>
    </Box>
  );
}

function InViewBox({ children, ...props }: BoxProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref);
  const variants = {
    visible: { opacity: 1 },
    invisible: { opacity: 0 },
  };

  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      px={4}
      ref={ref}
      {...props}
    >
      <Box
        as={motion.div}
        animate={inView ? 'visible' : 'invisible'}
        variants={variants}
      >
        {children}
      </Box>
    </Box>
  );
}

export function WithView() {
  return (
    <>
      <InViewBox bg="red.600" color="black">
        <Heading as="h2" size="xl">RED</Heading>
      </InViewBox>
      <InViewBox bg="blue.600" color="white">
        <Heading as="h2" size="xl">BLUE</Heading>
      </InViewBox>
      <InViewBox bg="yellow.600" color="black">
        <Heading as="h2" size="xl">YELLOW</Heading>
      </InViewBox>
      <InViewBox bg="purple.600" color="white">
        <Heading as="h2" size="xl">PURPLE</Heading>
      </InViewBox>
    </>
  );
}
