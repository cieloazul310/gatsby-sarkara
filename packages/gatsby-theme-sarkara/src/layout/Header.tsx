import * as React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import {
  Box,
  Spacer,
  Heading,
  ButtonGroup,
  Button,
  IconButton,
  useColorMode,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Link,
  useSiteMetadata,
} from '@cieloazul310/gatsby-theme-sarkara-components';
import { Header as SarkaraHeader } from '@cieloazul310/sarkara-layout';
import useGradientBox from './useGradientBox';

function Header() {
  const { title } = useSiteMetadata();
  const { color, bgGradient } = useGradientBox();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <SarkaraHeader color={color} bgGradient={bgGradient}>
      <Box py={2}>
        <Link
          href="/"
          color="white"
          _hover={{
            color: 'primary.100',
            textDecoration: 'none',
          }}
        >
          <Heading as="h1" size="md">
            {title}
          </Heading>
        </Link>
      </Box>
      <Spacer display={['none', 'inherit']} />
      <ButtonGroup
        display={['none', 'inherit']}
        gap="2"
        py={2}
        colorScheme="primary"
      >
        <Button as={GatsbyLink} to="/about/">
          About
        </Button>
        <IconButton
          onClick={toggleColorMode}
          icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          aria-label="toggle color mode"
        />
      </ButtonGroup>
    </SarkaraHeader>
  );
}

export default Header;
