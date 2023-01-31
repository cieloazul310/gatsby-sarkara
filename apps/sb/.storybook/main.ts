import * as path from 'path';
// import type { StorybookConfig } from '@storybook/core-common';
import { mergeConfig } from 'vite';
import type { StorybookViteConfig } from '@storybook/builder-vite';

const toPath = (_path: string) => path.join(process.cwd(), _path);

const config: StorybookViteConfig = {
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    // '@chakra-ui/storybook-addon',
  ],
  framework: '@storybook/react',
  core: {
    // builder: '@storybook/builder-webpack5',
    builder: '@storybook/builder-vite',
  },
  features: {
    storyStoreV7: true,
    emotionAlias: false,
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      // allowSyntheticDefaultImports: false, // speeds up storybook build time
      // esModuleInterop: false, // speeds up storybook build time
      shouldExtractLiteralValuesFromEnum: true, // makes union prop types like variant and size appear as select controls
      shouldRemoveUndefinedFromOptional: true, // makes string and boolean types that can be undefined appear as inputs and switches
      /*
      propFilter: (prop: any) =>
        prop.parent
          ? !/node_modules\/(?!@mui)/.test(prop.parent.fileName)
          : true,
      */
    },
  },
  async viteFinal(config, { configType }) {
    // return the customized config
    return mergeConfig(config, {
      // customize the Vite config here
      resolve: {
        alias: {
          '@emotion/core': toPath('node_modules/@emotion/react'),
          'emotion-theming': toPath('node_modules/@emotion/react'),
        },
      },
    });
  },
};

export default config;
