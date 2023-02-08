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
  useColorModeValue,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Link,
  useSiteMetadata,
} from '@cieloazul310/gatsby-theme-sarkara-components';
import { Header as SarkaraHeader } from '@cieloazul310/sarkara-layout';

function Header() {
  const { title } = useSiteMetadata();
  const { toggleColorMode } = useColorMode();
  const icon = useColorModeValue(<MoonIcon />, <SunIcon />);

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
          icon={icon}
          aria-label="toggle color mode"
        />
      </ButtonGroup>
    </SarkaraHeader>
  );
}

export default Header;
