import * as React from 'react';
import {
  BasicLayout,
  type BasicLayoutProps,
} from '@cieloazul310/sarkara-layout';
import Header from './Header';
import Jumbotron from './Jumbotron';

export type SarkaraLayoutProps = BasicLayoutProps;

function SarkaraLayout({
  title,
  header,
  jumbotron,
  description,
  children,
}: SarkaraLayoutProps) {
  return (
    <BasicLayout
      title={title}
      header={header ?? <Header />}
      jumbotron={
        jumbotron ?? <Jumbotron title={title} description={description} />
      }
    >
      {children}
    </BasicLayout>
  );
}

export default SarkaraLayout;
