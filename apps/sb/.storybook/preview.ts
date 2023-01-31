// import { theme as baseTheme } from '@chakra-ui/react';
import { withChakra } from './with-chakra.decorator';

export const decorators = [withChakra];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  /*
  chakra: {
    theme: {
      colors: {
        primary: baseTheme.colors.blue,
        secondary: baseTheme.colors.orange,
      },
      sizes: {
        header: '56px',
      },
    },
  },
  */
  controls: {
    expanded: true,
    hideNoControlsWarning: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  // layout: 'fullscreen',
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    title: 'Theme',
    description: 'Theme for your components',
    defaultValue: 'light',
    toolbar: {
      icon: 'paintbrush',
      dynamicTitle: true,
      items: [
        { value: 'light', left: '☀️', title: 'Light mode' },
        { value: 'dark', left: '🌙', title: 'Dark mode' },
      ],
    },
  },
};
