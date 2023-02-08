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
  Header as SarkaraHeader,
  useSiteMetadata,
} from '@cieloazul310/gatsby-theme-sarkara';

function Header() {
  const { title } = useSiteMetadata();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <SarkaraHeader>
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
