import * as React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '@cieloazul310/sarkara-components';

export function TableExample() {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Style</Th>
          <Th>Born</Th>
          <Th>Died</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>J.S.Bach</Td>
          <Td>Baloque</Td>
          <Td>1685</Td>
          <Td>1750</Td>
        </Tr>
        <Tr>
          <Td>Beethoven</Td>
          <Td>Classical</Td>
          <Td>1770</Td>
          <Td>1827</Td>
        </Tr>
        <Tr>
          <Td>Brahms</Td>
          <Td>Romantic</Td>
          <Td>1833</Td>
          <Td>1897</Td>
        </Tr>
      </Tbody>
    </Table>
  );
}

export function TableExampleJa() {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>名前</Th>
          <Th>生年</Th>
          <Th>没年</Th>
          <Th>代表作</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>伊福部昭</Td>
          <Td>1914</Td>
          <Td>2006</Td>
          <Td>ゴジラ</Td>
        </Tr>
        <Tr>
          <Td>武満徹</Td>
          <Td>1930</Td>
          <Td>1996</Td>
          <Td>ノヴェンバー・ステップス</Td>
        </Tr>
        <Tr>
          <Td>一柳慧</Td>
          <Td>1933</Td>
          <Td>2022</Td>
          <Td>ピアノ・メディア</Td>
        </Tr>
      </Tbody>
    </Table>
  );
}