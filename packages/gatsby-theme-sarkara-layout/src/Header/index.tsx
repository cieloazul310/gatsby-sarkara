import * as React from 'react';
import { Spacer, Heading } from '@chakra-ui/react';
import {
  GatsbySarkaraLink,
  useSiteMetadata,
} from '@cieloazul310/gatsby-theme-sarkara-components';
import { SarkaraHeader } from '@cieloazul310/sarkara-layout';
import HeaderRight from './Right';

function Header() {
  const { title } = useSiteMetadata();
  return (
    <SarkaraHeader>
      <GatsbySarkaraLink
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
      </GatsbySarkaraLink>
      <Spacer display={['none', 'inherit']} />
      <HeaderRight />
    </SarkaraHeader>
  );
}

export default Header;
