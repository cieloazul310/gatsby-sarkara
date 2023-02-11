import * as React from 'react';
import type { PageProps } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import {
  SarkaraLayout,
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
  console.log(pageContext);
  return (
    <SarkaraLayout
      title={pageContext?.frontmatter?.title ?? 'Gatsby Sarkara MDX'}
      description={pageContext?.frontmatter?.description ?? undefined}
    >
      <Paper as="article">
        <MDXProvider components={chakraComponents}>{children}</MDXProvider>
      </Paper>
    </SarkaraLayout>
  );
}

export default Layout;
