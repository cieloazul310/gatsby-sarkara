import * as React from 'react';
import { Heading, Text } from '@chakra-ui/react';
import { SarkaraFooter } from '@cieloazul310/sarkara-layout';
import {
  GatsbySarkaraLink,
  useSiteMetadata,
} from '@cieloazul310/gatsby-theme-sarkara-components';

function Footer() {
  const { title } = useSiteMetadata();
  return (
    <SarkaraFooter>
      <Heading as="h6" size="md">
        <GatsbySarkaraLink href="/" color="inherit">
          {title}
        </GatsbySarkaraLink>
      </Heading>
      <Text fontSize="md">
        © {new Date().getFullYear()} {title} All rights reserved.
      </Text>
      <Text fontSize="sm">
        Built with
        {` `}
        <GatsbySarkaraLink href="https://www.gatsbyjs.com/">
          Gatsby
        </GatsbySarkaraLink>
      </Text>
    </SarkaraFooter>
  );
}

export default Footer;
