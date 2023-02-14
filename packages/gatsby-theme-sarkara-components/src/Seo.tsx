/* eslint react/jsx-props-no-spreading: warn */
import * as React from 'react';
import { Seo, type SeoProps } from '@cieloazul310/sarkara-components';
import useSiteMetadata from './utils/useSiteMetadata';

export type GatsbySeoProps = SeoProps;

function GatsbySeo({ title, description, children, ...props }: GatsbySeoProps) {
  const siteMetadata = useSiteMetadata();
  const pageTitle = title
    ? `${title} - ${siteMetadata.title}`
    : siteMetadata.title;
  const pageDescription = description ?? siteMetadata.description;

  return (
    <Seo
      title={pageTitle}
      description={pageDescription}
      siteTitle={siteMetadata.title}
      {...props}
    >
      {children}
    </Seo>
  );
}

GatsbySeo.defaultProps = {
  title: undefined,
  description: undefined,
  image: undefined,
  type: undefined,
  twitterCard: undefined,
};

export default GatsbySeo;
