import * as React from 'react';
import { Header, Footer } from '../components';

export type DefaultLayoutProps = React.PropsWithChildren<{}>;

function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default DefaultLayout;
