import * as React from 'react';

export type SeoProps = React.PropsWithChildren<{
  title?: string;
  type?: 'website' | 'book' | 'profile' | string;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  description?: string;
  image?: string;
  siteTitle?: string;
}>;

function Seo({
  title,
  siteTitle,
  description,
  image,
  children,
  type = 'website',
  twitterCard = 'summary',
}: SeoProps) {
  return (
    <>
      {title ? (
        <>
          <title>{title}</title>
          <meta name="og:title" content={title} />
          <meta name="twitter:title" content={title} />
        </>
      ) : null}
      <meta name="og:type" content={type} />
      {description ? (
        <>
          <meta name="description" content={description} />
          <meta name="og:description" content={description} />
          <meta name="twitter:description" content={description} />
        </>
      ) : null}
      <meta name="twitter:card" content={twitterCard} />
      {siteTitle ? <meta name="twitter:site" content={siteTitle} /> : null}
      {image ? (
        <>
          <meta name="image" content={image} />
          <meta name="og:image" content={image} />
          <meta name="twitter:image" content={image} />
        </>
      ) : null}
      {children}
    </>
  );
}

Seo.defaultProps = {
  title: undefined,
  description: undefined,
  image: undefined,
  type: 'website',
  twitterCard: 'summary',
  siteTitle: undefined,
};

export default Seo;
