import * as React from 'react';
import { Heading, Text } from '@chakra-ui/react';
import { SarkaraFooter } from '@cieloazul310/sarkara-layout';
import {
  Link,
  useSiteMetadata,
} from '@cieloazul310/gatsby-theme-sarkara-components';

function Footer() {
  const { title } = useSiteMetadata();
  return (
    <SarkaraFooter>
      <Heading as="h6" size="md">
        <Link href="/" color="inherit">
          {title}
        </Link>
      </Heading>
      <Text fontSize="md">
        © {new Date().getFullYear()} {title} All rights reserved.
      </Text>
      <Text fontSize="sm">
        Built with
        {` `}
        <Link href="https://www.gatsbyjs.com/">Gatsby</Link>
      </Text>
    </SarkaraFooter>
  );
}

export default Footer;
