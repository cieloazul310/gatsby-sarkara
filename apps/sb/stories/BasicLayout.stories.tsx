import * as React from 'react';
import { Heading, VStack, useColorModeValue } from '@chakra-ui/react';
import {
  Jumbotron,
  Paper,
  PaperButton,
  useGradient,
} from '@cieloazul310/sarkara-components';
import { BasicLayout, Header } from '@cieloazul310/sarkara-layout';
import { LoremIpsum, LoremIpsumJa } from '../components/LoremIpsum';

function useGradientBox() {
  const color = useColorModeValue('white', 'white');
  const primary = useColorModeValue('primary.500', 'primary.700');
  const secondary = useColorModeValue('secondary.100', 'gray.900');
  const bgGradient = useGradient(primary, secondary);

  return { color, bgGradient };
}

export default {
  title: 'Basic Layout',
  component: BasicLayout,
};

function Sidebar() {
  const menu = [
    { title: 'Top', path: '/' },
    { title: 'Post', path: '/post/' },
    { title: 'Category', path: '/categories/' },
    { title: 'About', path: '/about/' },
  ];
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
    <BasicLayout title="Basic Layout" sidebarContents={<Sidebar />}>
      <LoremIpsum />
    </BasicLayout>
  );
}

export function customBasicLayout() {
  const { color, bgGradient } = useGradientBox();

  const header = React.useMemo(
    () => (
      <Header color={color} bgGradient={bgGradient}>
        <Heading as="h1" size="md">
          Header
        </Heading>
      </Header>
    ),
    [bgGradient]
  );
  const jumbotron = React.useMemo(
    () => (
      <Jumbotron title="Custom Layout" color={color} bgGradient={bgGradient} />
    ),
    [bgGradient]
  );

  return (
    <BasicLayout
      title="Custom Layout"
      header={header}
      jumbotron={jumbotron}
      sidebarContents={<Sidebar />}
    >
      <Paper>
        <LoremIpsum />
      </Paper>
      <Paper>
        <LoremIpsumJa />
      </Paper>
    </BasicLayout>
  );
}

export function WithoutSidebar() {
  const { color, bgGradient } = useGradientBox();

  const header = React.useMemo(
    () => (
      <Header color={color} bgGradient={bgGradient}>
        <Heading as="h1" size="md">
          Header
        </Heading>
      </Header>
    ),
    [bgGradient]
  );
  const jumbotron = React.useMemo(
    () => (
      <Jumbotron title="Custom Layout" color={color} bgGradient={bgGradient} />
    ),
    [bgGradient]
  );

  return (
    <BasicLayout
      title="Custom Layout"
      header={header}
      jumbotron={jumbotron}
      disableSidebar
    >
      <Paper>
        <LoremIpsum />
      </Paper>
      <Paper>
        <LoremIpsumJa />
      </Paper>
    </BasicLayout>
  );
}
