/* eslint react/jsx-props-no-spreading: warn */
import * as React from 'react';
import {
  forwardRef,
  Table as ChakraTable,
  TableContainer,
  Td as ChakraTd,
  Th as ChakraTh,
  useColorModeValue,
  type TableProps as ChakraTableProps,
  type TableCellProps,
  type ComponentWithAs,
} from '@chakra-ui/react';

const SarkaraTable: ComponentWithAs<'table', ChakraTableProps> = forwardRef<
  ChakraTableProps,
  'table'
>((props, ref) => {
  const bg = useColorModeValue('whiteAlpha.600', 'blackAlpha.400');
  return (
    <TableContainer bg={bg} rounded="xl" my={8}>
      <ChakraTable ref={ref} {...props} />
    </TableContainer>
  );
});

function isTextAlign(
  align: TableCellProps['align']
): align is 'center' | 'left' | 'right' {
  return align === 'center' || align === 'left' || align === 'right';
}

export const Td: ComponentWithAs<'td', TableCellProps> = forwardRef<
  TableCellProps,
  'td'
>(({ align, ...props }, ref) => {
  const textAlign = isTextAlign(align) ? align : undefined;
  return <ChakraTd ref={ref} textAlign={textAlign} {...props} />;
});

export const Th: ComponentWithAs<'th', TableCellProps> = forwardRef<
  TableCellProps,
  'th'
>(({ align, ...props }, ref) => {
  const textAlign = isTextAlign(align) ? align : undefined;
  return <ChakraTh ref={ref} textAlign={textAlign} {...props} />;
});

export default SarkaraTable;
