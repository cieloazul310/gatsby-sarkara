import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'Gatsby Sarkara',
    description: 'Gatsby theme for Chakra UI',
    siteUrl: 'https://cieloazul310.github.io/gatsby-sarkara/',
  },
  pathPrefix: '/gatsby-sarkara',
  plugins: [
    `gatsby-plugin-pnpm`,
    `@chakra-ui/gatsby-plugin`,
    `@cieloazul310/gatsby-theme-sarkara`,
  ],
};

export default config;
