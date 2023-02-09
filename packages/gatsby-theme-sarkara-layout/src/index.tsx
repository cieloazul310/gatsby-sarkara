/* eslint react/jsx-props-no-spreading: warn */
import * as React from 'react';
import {
  BasicLayout,
  type BasicLayoutProps,
} from '@cieloazul310/sarkara-layout';
import { PaperButtonLink } from '@cieloazul310/gatsby-theme-sarkara-components';
// import { useLocation } from '@reach/router';
import Header from './Header';
import Jumbotron from './Jumbotron';
import Sidebar from './Sidebar';
import DrawerMenu from './DrawerMenu';
import Footer from './Footer';

export type SarkaraLayoutProps = BasicLayoutProps;

export function SarkaraLayout({
  title,
  header,
  jumbotron,
  description,
  sidebarContents,
  children,
  footer,
  ...props
}: SarkaraLayoutProps) {
  // const { pathname } = useLocation();
  // console.log(pathname);
  return (
    <BasicLayout
      title={title}
      header={header ?? <Header />}
      jumbotron={
        jumbotron ?? <Jumbotron title={title} description={description} />
      }
      sidebarContents={<Sidebar sidebarContents={sidebarContents} />}
      drawerContents={<DrawerMenu />}
      footer={footer ?? <Footer />}
      {...props}
    >
      {children}
      <PaperButtonLink href="/">Top Page</PaperButtonLink>
    </BasicLayout>
  );
}
