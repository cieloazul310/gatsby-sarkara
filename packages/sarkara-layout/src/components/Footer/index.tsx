/* eslint react/jsx-props-no-spreading: warn */
import * as React from 'react';
import { Flex, useColorModeValue, type FlexProps } from '@chakra-ui/react';
import { useGradient, usePrimaryToken } from '@cieloazul310/sarkara-components';

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
  const primaryLight = usePrimaryToken(300);
  const primaryDark = usePrimaryToken(700);
  const primary = useColorModeValue(primaryLight, primaryDark);
  const secondary = useColorModeValue('white', 'gray.800');
  const bgGradient = useGradient(primary, secondary, { direction: 'to-t' });
  return (
    <Flex
      as={as}
      alignItems={alignItems}
      direction={direction}
      py={py}
      gap={gap}
      bgGradient={bgGradient}
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
