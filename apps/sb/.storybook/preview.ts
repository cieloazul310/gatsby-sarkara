// import { theme as baseTheme } from '@chakra-ui/react';
import { action } from '@storybook/addon-actions';
import { withChakra } from './with-chakra.decorator';

declare global {
  interface Window {
    ___navigate: (pathname: string) => void;
  }
}

// Gatsby's Link overrides:
// Gatsby Link calls the `enqueue` & `hovering` methods on the global variable ___loader.
// This global object isn't set in storybook context, requiring you to override it to empty functions (no-op),
// so Gatsby Link doesn't throw errors.
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
}
// This global variable prevents the "__BASE_PATH__ is not defined" error inside Storybook.
global.__BASE_PATH__ = "/"

// Navigating through a gatsby app using gatsby-link or any other gatsby component will use the `___navigate` method.
// In Storybook, it makes more sense to log an action than doing an actual navigate. Check out the actions addon docs for more info: https://storybook.js.org/docs/react/essentials/actions
window.___navigate = pathname => {
  action("NavigateTo:")(pathname)
}

/*
const chakra = {
  theme: {
    colors: {
      primary: baseTheme.colors.blue,
      secondary: baseTheme.colors.orange,
    },
    sizes: {
      header: '56px',
    },
  },
};
*/
export const decorators = [withChakra];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  // chakra,
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
