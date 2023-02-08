import * as React from 'react';
import {
  Jumbotron as SarkaraJumbotron,
  type JumbotronProps,
} from '@cieloazul310/sarkara-components';

function Jumbotron({
  title,
  description,
}: Pick<JumbotronProps, 'title' | 'description'>) {
  return <SarkaraJumbotron title={title} description={description} />;
}

export default Jumbotron;
