import * as React from 'react';
import type { PageProps } from 'gatsby';
import { MDXProvider, useMDXComponents } from '@mdx-js/react';
import {
  GatsbySarkaraLayout,
  Paper,
  chakraComponents,
} from '@cieloazul310/gatsby-theme-sarkara';

type MdxPageContext = {
  frontmatter: {
    title: string | null;
    description: string | null;
  } | null;
} | null;

function Layout({
  children,
  pageContext,
}: PageProps<Record<string, unknown>, MdxPageContext>) {
  const components = useMDXComponents({ ...chakraComponents });
  return (
    <GatsbySarkaraLayout
      title={pageContext?.frontmatter?.title ?? 'Gatsby Sarkara MDX'}
      description={pageContext?.frontmatter?.description ?? undefined}
    >
      <Paper as="article">
        <MDXProvider components={components}>{children}</MDXProvider>
      </Paper>
    </GatsbySarkaraLayout>
  );
}

export default Layout;
