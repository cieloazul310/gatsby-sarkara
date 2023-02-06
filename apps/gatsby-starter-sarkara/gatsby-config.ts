import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  plugins: [
    `gatsby-plugin-pnpm`,
    `@chakra-ui/gatsby-plugin`,
    `@cieloazul310/gatsby-theme-sarkara`,
  ],
};

export default config;
