import * as React from 'react';
import { ChakraProvider, extendTheme, useColorMode } from '@chakra-ui/react';
import type { StoryFn, StoryContext } from '@storybook/react';
import defauktTheme from './themes';

function ColorModeHandler({ themeKey }: { themeKey: any }) {
  const { colorMode, toggleColorMode } = useColorMode();
  console.log(colorMode);
  React.useEffect(() => {
    if (colorMode !== themeKey) {
      toggleColorMode();
    }
  }, [themeKey]);
  return <div style={{ display: 'none' }} />;
}

export function withChakra(Story: StoryFn, context: StoryContext) {
  const { theme: themeKey } = context.globals;
  const theme = React.useMemo(
    () =>
      extendTheme({
        ...defauktTheme,
        config: {
          initialColorMode: themeKey === 'dark' ? 'dark' : 'light',
        },
      }),
    []
  );

  return (
    <ChakraProvider theme={theme}>
      <ColorModeHandler themeKey={themeKey} />
      <div id="story-wrapper" style={{ minHeight: '100vh' }}>
        <Story />
      </div>
    </ChakraProvider>
  );
}
