/* eslint react/jsx-props-no-spreading: warn */
import * as React from 'react';
import { Flex, type FlexProps } from '@chakra-ui/react';

export type FooterProps = FlexProps;

function Footer({
  children,
  as = 'footer',
  alignItems = 'center',
  direction = 'column',
  py = 16,
  gap = 2,
  ...props
}: FooterProps) {
  return (
    <Flex
      as={as}
      alignItems={alignItems}
      direction={direction}
      py={py}
      gap={gap}
      {...props}
    >
      {children}
    </Flex>
  );
}

Footer.defaultProps = {
  as: 'footer',
  alignItems: 'center',
  direction: 'column',
  py: 16,
  gap: 2,
};

export default Footer;
