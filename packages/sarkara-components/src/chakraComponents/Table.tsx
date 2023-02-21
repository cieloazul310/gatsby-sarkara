/* eslint react/jsx-props-no-spreading: warn */
import * as React from 'react';
import {
  forwardRef,
  Table as ChakraTable,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  useColorModeValue,
  type TableProps as ChakraTableProps,
  type ComponentWithAs,
} from '@chakra-ui/react';

export const Table: ComponentWithAs<'table', ChakraTableProps> = forwardRef<
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

export { Thead, Tbody, Tfoot, Tr, Th, Td };
