/* eslint react/jsx-props-no-spreading: warn */
import * as React from 'react';
import {
  forwardRef,
  chakra,
  AspectRatio,
  Link as ChakraLink,
  type AspectRatioProps,
  type ChakraProps,
  type ComponentWithAs,
} from '@chakra-ui/react';

const ChakraImg = chakra('img');
const ChakraIframe = chakra('iframe');

export type IframeProps = ChakraProps & Pick<AspectRatioProps, 'ratio'>;

export const Iframe: ComponentWithAs<'iframe', IframeProps> = forwardRef<
  IframeProps,
  'iframe'
>(({ width, height, ratio, ...props }, ref) => (
  <AspectRatio ratio={ratio}>
    <ChakraIframe ref={ref} {...props} />
  </AspectRatio>
));

export const Img: ComponentWithAs<'img', ChakraProps> = forwardRef<
  ChakraProps,
  'img'
>(({ src, ...props }, ref) => (
  <ChakraLink
    href={src}
    ref={ref}
    my={4}
    isExternal
    transition="filter .25s"
    _hover={{ filter: 'brightness(1.1)' }}
  >
    <ChakraImg src={src} {...props} />
  </ChakraLink>
));
