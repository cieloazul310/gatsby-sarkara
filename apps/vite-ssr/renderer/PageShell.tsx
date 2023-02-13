import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { PageContextProvider } from './usePageContext';
import theme from './theme';
import type { PageContext } from './types';

function PageShell({
  children,
  pageContext,
}: {
  children: React.ReactNode;
  pageContext: PageContext;
}) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <ChakraProvider theme={theme}>
          {children}
        </ChakraProvider>
      </PageContextProvider>
    </React.StrictMode>
  );
}

export { PageShell };
