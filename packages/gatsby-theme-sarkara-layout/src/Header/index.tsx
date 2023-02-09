import * as React from 'react';
import { Box, Spacer, Heading } from '@chakra-ui/react';
import {
  Link,
  useSiteMetadata,
} from '@cieloazul310/gatsby-theme-sarkara-components';
import { Header as SarkaraHeader } from '@cieloazul310/sarkara-layout';
import HeaderRight from './Right';

function Header() {
  const { title } = useSiteMetadata();
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
      <HeaderRight />
    </SarkaraHeader>
  );
}

export default Header;
