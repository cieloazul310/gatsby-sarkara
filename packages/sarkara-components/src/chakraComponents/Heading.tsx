/* eslint react/jsx-props-no-spreading: warn */
import * as React from 'react';
import {
  forwardRef,
  Heading,
  type HeadingProps,
  type ComponentWithAs,
  type As,
} from '@chakra-ui/react';
import { usePrimaryToken } from '../utils';

const firstStyle = {
  mt: 4,
};

export const H1: ComponentWithAs<As<any>, HeadingProps> = forwardRef<
  HeadingProps,
  'h1'
>(({ _first, ...props }, ref) => (
  <Heading
    as="h1"
    ref={ref}
    mt={8}
    mb={8}
    size="2xl"
    _first={{ ..._first, ...firstStyle }}
    {...props}
  />
));

export const H2: ComponentWithAs<As<any>, HeadingProps> = forwardRef<
  HeadingProps,
  'h2'
>(({ _first, ...props }, ref) => {
  const borderBottomColor = usePrimaryToken(400);
  return (
    <Heading
      as="h2"
      ref={ref}
      mt={8}
      mb={4}
      size="xl"
      borderBottomWidth="1px"
      borderBottomColor={borderBottomColor}
      _first={{ ..._first, ...firstStyle }}
      {...props}
    />
  );
});

export const H3: ComponentWithAs<As<any>, HeadingProps> = forwardRef<
  HeadingProps,
  'h3'
>(({ _first, ...props }, ref) => (
  <Heading
    as="h3"
    ref={ref}
    mt={8}
    mb={4}
    size="lg"
    _first={{ ..._first, ...firstStyle }}
    {...props}
  />
));

export const H4: ComponentWithAs<As<any>, HeadingProps> = forwardRef<
  HeadingProps,
  'h4'
>(({ _first, ...props }, ref) => (
  <Heading
    as="h4"
    ref={ref}
    mt={4}
    mb={4}
    size="md"
    _first={{ ..._first, ...firstStyle }}
    {...props}
  />
));

export const H5: ComponentWithAs<As<any>, HeadingProps> = forwardRef<
  HeadingProps,
  'h5'
>(({ _first, ...props }, ref) => (
  <Heading
    as="h5"
    ref={ref}
    mt={4}
    mb={4}
    size="sm"
    _first={{ ..._first, ...firstStyle }}
    {...props}
  />
));

export const H6: ComponentWithAs<As<any>, HeadingProps> = forwardRef<
  HeadingProps,
  'h6'
>(({ _first, ...props }, ref) => (
  <Heading
    as="h6"
    ref={ref}
    mt={4}
    mb={4}
    size="sm"
    fontWeight="normal"
    _first={{ ..._first, ...firstStyle }}
    {...props}
  />
));
