import * as React from 'react';
// import { withPrefix } from 'gatsby';
import {
  BasicLayout,
  type BasicLayoutProps,
} from '@cieloazul310/sarkara-layout';
// import { PaperButtonLink } from '@cieloazul310/gatsby-theme-sarkara-components';
// import { useLocation } from '@reach/router';
import Header from './Header';
import Jumbotron from './Jumbotron';
import Sidebar from './Sidebar';

export type SarkaraLayoutProps = BasicLayoutProps;

export function SarkaraLayout({
  title,
  header,
  jumbotron,
  description,
  sidebarContents,
  children,
}: SarkaraLayoutProps) {
  // const { pathname } = useLocation();
  return (
    <BasicLayout
      title={title}
      header={header ?? <Header />}
      jumbotron={
        jumbotron ?? <Jumbotron title={title} description={description} />
      }
      sidebarContents={<Sidebar sidebarContents={sidebarContents} />}
    >
      {children}
      {/*
      pathname !== withPrefix('/') ? (
        <PaperButtonLink href="/">トップページ</PaperButtonLink>
      ) : null
      */}
    </BasicLayout>
  );
}
