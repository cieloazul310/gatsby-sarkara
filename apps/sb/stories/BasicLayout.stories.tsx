import * as React from 'react';
import { Heading, useColorMode } from '@chakra-ui/react';
import { Jumbotron, Paper } from '@cieloazul310/sarkara-components';
import { BasicLayout, Header } from '@cieloazul310/sarkara-layout';

function useGradientBox() {
  const { colorMode } = useColorMode();
  return React.useMemo(() => {
    const primary = colorMode === 'light' ? 'primary.500' : 'primary.700';
    const secondary = colorMode === 'light' ? 'secondary.100' : 'gray.900';

    return {
      color: 'white',
      bgGradient: `linear(to-r, ${primary}, ${secondary})`,
    };
  }, [colorMode]);
}

export default {
  title: 'Basic Layout',
  component: BasicLayout,
};

export function withSimpleChildren() {
  return (
    <BasicLayout title="Basic Layout">
      <p>hoge</p>
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
  const jumbotron = React.useMemo(() => (
    <Jumbotron title="Custom Layout" color={color} bgGradient={bgGradient} />
  ), [bgGradient]);

  return (
    <BasicLayout
      title="Custom Layout"
      header={header}
      jumbotron={jumbotron}
    >
      <Paper colorScheme="primary">
        <p>hoge</p>
      </Paper>
      <Paper colorScheme="primary">
        <p>hoge</p>
      </Paper>
      <Paper colorScheme="primary">
        <p>hoge</p>
      </Paper>
    </BasicLayout>
  );
}
