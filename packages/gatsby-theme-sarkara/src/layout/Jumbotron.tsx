import * as React from 'react';
import {
  Jumbotron as SarkaraJumbotron,
  type JumbotronProps,
} from '@cieloazul310/sarkara-components';
import useGradientBox from './useGradientBox';

function Jumbotron({
  title,
  description,
}: Pick<JumbotronProps, 'title' | 'description'>) {
  const { color, bgGradient } = useGradientBox();
  return (
    <SarkaraJumbotron
      title={title}
      description={description}
      color={color}
      bgGradient={bgGradient}
    />
  );
}

export default Jumbotron;
