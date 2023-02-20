import * as React from 'react';
import { VStack } from '@chakra-ui/react';
import { PaperButton } from '@cieloazul310/sarkara-components';
import { SarkaraLayoutLite } from '@cieloazul310/sarkara-layout';
import { LoremIpsum } from '../components/LoremIpsum';

export default {
  title: 'Sarkara Layout Lite',
  component: SarkaraLayoutLite,
};

const menu = [
  { title: 'Top', path: '/' },
  { title: 'Post', path: '/post/' },
  { title: 'Category', path: '/categories/' },
  { title: 'About', path: '/about/' },
];
function Sidebar() {
  return (
    <VStack spacing={2} align="stretch">
      {menu.map(({ title, path }) => (
        <PaperButton key={path}>{title}</PaperButton>
      ))}
    </VStack>
  );
}

export function withSimpleChildren() {
  return (
    <SarkaraLayoutLite title="Sarkara Layout" sidebarContents={<Sidebar />}>
      <LoremIpsum />
    </SarkaraLayoutLite>
  );
}

export function DisableSidebarSticky() {
  return (
    <SarkaraLayoutLite
      title="Sarkara Layout"
      sidebarContents={<Sidebar />}
      disableSidebarSticky
    >
      <LoremIpsum />
    </SarkaraLayoutLite>
  );
}
