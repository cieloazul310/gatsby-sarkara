import * as React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import {
  ButtonGroup,
  Button,
  IconButton,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

function HeaderRight() {
  const { toggleColorMode } = useColorMode();
  const icon = useColorModeValue(<MoonIcon />, <SunIcon />);

  return (
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
  );
}

export default HeaderRight;
