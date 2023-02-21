/* eslint react/jsx-props-no-spreading: warn */
import * as React from 'react';
import { Jumbotron } from '@cieloazul310/sarkara-components';
import { SarkaraHeader, SarkaraFooter } from '../components';
import SarkaraLayout, { type SarkaraLayoutProps } from './SarkaraLayout';

export type SarkaraLayoutLiteProps = Omit<
  SarkaraLayoutProps,
  'header' | 'jumbotron' | 'footer'
> & {
  description?: string;
  jumbotronHeight?: number;
};

/**
 * Sarkara basic layout with placeholder components.
 */
function SarkaraLayoutLite({
  children,
  title,
  siteTitle,
  description,
  jumbotronHeight,
  ...props
}: SarkaraLayoutLiteProps) {
  const header = <SarkaraHeader title={siteTitle ?? title} />;
  const jumbotron = (
    <Jumbotron
      title={title}
      description={description}
      height={jumbotronHeight}
    />
  );
  const footer = <SarkaraFooter title={siteTitle ?? title} />;

  return (
    <SarkaraLayout
      title={title}
      header={header}
      jumbotron={jumbotron}
      footer={footer}
      {...props}
    >
      {children}
    </SarkaraLayout>
  );
}

SarkaraLayoutLite.defaultProps = {
  description: undefined,
  jumbotronHeight: undefined,
};

export default SarkaraLayoutLite;
