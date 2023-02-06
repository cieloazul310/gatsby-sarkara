import { graphql, useStaticQuery } from 'gatsby';

export type SiteMetadata = {
  title: string;
  description: string;
  siteUrl: string;
};

function useSiteMetadata() {
  const { site } = useStaticQuery<{
    site: { siteMetadata: SiteMetadata };
  }>(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `);
  return site.siteMetadata;
}

export default useSiteMetadata;
