/* eslint react/jsx-props-no-spreading: warn */
import * as React from 'react';
import {
  forwardRef,
  OrderedList,
  UnorderedList,
  ListItem as Li,
  type ListProps,
  type ComponentWithAs,
} from '@chakra-ui/react';

export const Ul: ComponentWithAs<'ul', ListProps> = forwardRef<ListProps, 'ul'>(
  (props, ref) => <UnorderedList my={4} ref={ref} {...props} />
);

export const Ol: ComponentWithAs<'ol', ListProps> = forwardRef<ListProps, 'ol'>(
  (props, ref) => <OrderedList my={4} ref={ref} {...props} />
);

export { Li };
