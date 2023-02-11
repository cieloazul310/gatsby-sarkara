/* eslint @typescript-eslint/no-unused-vars: warn */
import * as React from 'react';
import type { ChakraProps } from '@chakra-ui/react';
import useHeaderHeight from './useHeaderHeight';

export function useHeaderXsHeight() {
  const headerHeight = useHeaderHeight();
  return React.useMemo(() => {
    if (Array.isArray(headerHeight)) {
      const [xs] = headerHeight;
      return xs;
    }
    return headerHeight;
  }, [headerHeight]);
}

export function useJumbotronHeight(
  defaultHeight: ChakraProps['height']
): ChakraProps['height'] {
  const headerXsHeight = useHeaderXsHeight();
  const jumbotronXsHeight = `calc(100vh - ${headerXsHeight})`;

  if (typeof defaultHeight === 'string' || typeof defaultHeight === 'number') {
    return [jumbotronXsHeight, defaultHeight];
  }
  if (typeof defaultHeight === 'object') {
    if (Array.isArray(defaultHeight)) {
      const [, ...defaultHeights] = defaultHeight;
      return [jumbotronXsHeight, ...defaultHeights];
    }
    return {
      xs: jumbotronXsHeight,
      ...defaultHeight,
    };
  }
  return defaultHeight;
}

export function useJumbotronPb(): ChakraProps['pb'] {
  const headerXsHeight = useHeaderXsHeight();
  if (!headerXsHeight) return 0;
  return [headerXsHeight, 0];
}

function useJumbotronSizes(defaultHeight: ChakraProps['height']): {
  height: ChakraProps['height'];
  pb: ChakraProps['pb'];
} {
  const height = useJumbotronHeight(defaultHeight);
  const pb = useJumbotronPb();

  return { height, pb };
}

export default useJumbotronSizes;
