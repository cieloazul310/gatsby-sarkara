/* eslint global-require: warn */
/* eslint import/no-extraneous-dependencies: warn */
import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'Gatsby Sarkara MDX',
    description: 'Gatsby theme for Chakra UI',
    siteUrl: 'https://cieloazul310.github.io/gatsby-sarkara/',
  },
  pathPrefix: '/gatsby-sarkara',
  plugins: [
    `gatsby-plugin-pnpm`,
    `@chakra-ui/gatsby-plugin`,
    `@cieloazul310/gatsby-theme-sarkara`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        mdxOptions: {
          remarkPlugins: [require('remark-gfm')]
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
  ],
};

export default config;
