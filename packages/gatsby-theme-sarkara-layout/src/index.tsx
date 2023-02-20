/* eslint react/jsx-props-no-spreading: warn */
import * as React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { Button } from '@chakra-ui/react';
import {
  SarkaraLayout,
  type SarkaraLayoutProps,
} from '@cieloazul310/sarkara-layout';
import {
  PaperButtonLink,
  useSiteMetadata,
} from '@cieloazul310/gatsby-theme-sarkara-components';
import { usePrimaryToken } from '@cieloazul310/sarkara-components';
// import { useLocation } from '@reach/router';
import Header from './Header';
import Jumbotron from './Jumbotron';
import Sidebar from './Sidebar';
import DrawerMenu from './DrawerMenu';
import Footer from './Footer';

export type GatsbySarkaraLayoutProps = SarkaraLayoutProps & {
  description?: string;
};

export function GatsbySarkaraLayout({
  title,
  header,
  jumbotron,
  description,
  sidebarContents,
  children,
  footer,
  ...props
}: GatsbySarkaraLayoutProps) {
  // const { pathname } = useLocation();
  // console.log(pathname);
  const siteMetadata = useSiteMetadata();
  const primary = usePrimaryToken();
  const layoutHeader = React.useMemo(() => {
    if (header) return header;
    return <Header />;
  }, [header, Header]);
  const layoutJumbotron = React.useMemo(() => {
    if (jumbotron) return jumbotron;
    return <Jumbotron title={title} description={description} />;
  }, [jumbotron, Jumbotron, title, description]);
  const layoutFooter = React.useMemo(() => {
    if (footer) return footer;
    return <Footer />;
  }, [footer, Footer]);

  const layoutSidebarContents = <Sidebar sidebarContents={sidebarContents} />;
  const layoutDrawerContents = <DrawerMenu />;
  const layoutDrawerFooterContents = (
    <Button as={GatsbyLink} to="/" mr={2} colorScheme={primary}>
      Top
    </Button>
  );

  return (
    <SarkaraLayout
      title={title}
      siteTitle={siteMetadata.title}
      header={layoutHeader}
      jumbotron={layoutJumbotron}
      sidebarContents={layoutSidebarContents}
      drawerContents={layoutDrawerContents}
      drawerFooterContents={layoutDrawerFooterContents}
      footer={layoutFooter}
      {...props}
    >
      {children}
      <PaperButtonLink href="/">Top Page</PaperButtonLink>
    </SarkaraLayout>
  );
}

GatsbySarkaraLayout.defaultProps = {
  description: undefined,
};
