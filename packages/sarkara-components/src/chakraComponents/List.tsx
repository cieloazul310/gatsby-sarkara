/* eslint react/jsx-props-no-spreading: warn */
import * as React from 'react';
import {
  forwardRef,
  List,
  OrderedList,
  UnorderedList,
  ListItem,
  type ListProps,
  type ListItemProps,
  type ComponentWithAs,
} from '@chakra-ui/react';

export const Ul: ComponentWithAs<'ul', ListProps> = forwardRef<ListProps, 'ul'>(
  ({ className, ...props }, ref) => {
    if (className === 'contains-task-list') {
      return <List className={className} my={4} ref={ref} {...props} />;
    }
    return <UnorderedList className={className} my={4} ref={ref} {...props} />;
  }
);

export const Ol: ComponentWithAs<'ol', ListProps> = forwardRef<ListProps, 'ol'>(
  (props, ref) => <OrderedList my={4} ref={ref} {...props} />
);

export const Li: ComponentWithAs<'li', ListItemProps> = forwardRef<
  ListItemProps,
  'li'
>(({ className, ...props }, ref) => {
  if (className === 'task-list-item') {
    return <ListItem className={className} ref={ref} {...props} />;
  }
  return <ListItem className={className} ref={ref} {...props} />;
});
