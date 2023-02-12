/* eslint react/jsx-props-no-spreading: warn */
import * as React from 'react';
import {
  Flex,
  Heading,
  Text,
  Link as ChakraLink,
  useColorModeValue,
  type FlexProps,
} from '@chakra-ui/react';
import { useGradient, usePrimaryToken } from '@cieloazul310/sarkara-components';

export type FooterProps = FlexProps & {
  title?: string;
};

function Footer({
  children,
  as = 'footer',
  alignItems = 'center',
  direction = 'column',
  py = 16,
  gap = 2,
  title,
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
      {children ||
        (title ? (
          <>
            <Heading as="h6" size="md">
              {title}
            </Heading>
            <Text fontSize="md">
              © {new Date().getFullYear()} {title} All rights reserved.
            </Text>
            <Text fontSize="sm">
              Built with
              {` `}
              <ChakraLink href="https://www.gatsbyjs.com/" isExternal>
                Gatsby
              </ChakraLink>
            </Text>
          </>
        ) : null)}
    </Flex>
  );
}

Footer.defaultProps = {
  title: undefined,
};

export default Footer;
