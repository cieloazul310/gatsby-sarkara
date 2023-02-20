import * as React from 'react';
import { Heading, VStack } from '@chakra-ui/react';
import {
  Jumbotron,
  Paper,
  PaperButton,
  Paragraph,
} from '@cieloazul310/sarkara-components';
import {
  SarkaraLayout,
  SarkaraHeader,
  SarkaraFooter,
} from '@cieloazul310/sarkara-layout';
import { LoremIpsum, LoremIpsumJa } from '../components/LoremIpsum';

export default {
  title: 'Sarkara Layout',
  component: SarkaraLayout,
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
const header = (
  <SarkaraHeader>
    <Heading as="h1" size="md">
      Sarkara Header
    </Heading>
  </SarkaraHeader>
);
const jumbotron = <Jumbotron title="Sarkara Layout" />;
const footer = <SarkaraFooter title="Sarkara Layout" />;

export function Basic() {
  return (
    <SarkaraLayout
      title="Custom Layout"
      header={header}
      jumbotron={jumbotron}
      footer={footer}
      sidebarContents={<Sidebar />}
    >
      <Paper>
        <LoremIpsum />
      </Paper>
      <Paper>
        <LoremIpsumJa />
      </Paper>
    </SarkaraLayout>
  );
}

export function WithoutSidebar() {
  return (
    <SarkaraLayout
      title="Custom Layout"
      header={header}
      jumbotron={jumbotron}
      footer={footer}
      disableSidebar
    >
      <Paper>
        <LoremIpsum />
      </Paper>
      <Paper>
        <LoremIpsumJa />
      </Paper>
    </SarkaraLayout>
  );
}

export function LargerSidebar() {
  const sidebar = React.useMemo(
    () => (
      <VStack spacing={2} align="stretch">
        {Array.from({ length: 20 }, (_, index) => (
          <PaperButton key={index.toString()}>Link {index}</PaperButton>
        ))}
      </VStack>
    ),
    []
  );
  return (
    <SarkaraLayout
      title="Larger Sidebar"
      header={header}
      jumbotron={jumbotron}
      footer={footer}
      sidebarContents={sidebar}
    >
      <Paper>
        <Paragraph>Alison</Paragraph>
      </Paper>
    </SarkaraLayout>
  );
}
