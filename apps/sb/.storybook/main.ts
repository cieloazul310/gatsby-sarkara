import * as path from 'path';
import type { StorybookConfig } from '@storybook/core-common';
import type { RuleSetRule } from 'webpack';

function isRuleSetRule(rule: RuleSetRule | '...' | undefined): rule is RuleSetRule {
  if (!rule) return false;
  return typeof rule === 'object';
}

const toPath = (_path: string) => path.join(process.cwd(), _path);

const config: StorybookConfig = {
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    // '@chakra-ui/storybook-addon',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
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
  async webpackFinal(config) {
    /*
    // Use correct react-dom depending on React version.
    if (parseInt(React.version) <= 18) {
      config.externals = ['react-dom/client'];
    }
    */
    const rule = config.module?.rules?.[0];
    if (isRuleSetRule(rule)) {
      // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
      rule.exclude = [/node_modules\/(?!(gatsby|gatsby-script)\/)/];

      // Remove core-js to prevent issues with Storybook
      rule.exclude = [/core-js/];
      // Use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
      rule.use?.[0].options.plugins.push(
        require.resolve('babel-plugin-remove-graphql-queries')
      );
    }

    // config.resolve?.mainFields = ['browser', 'module', 'main'];
    return {
      ...(config || {}),
      resolve: {
        ...(config.resolve || {}),
        mainFields: ['browser', 'module', 'main'],
        alias: {
          ...(config.resolve?.alias || {}),
          '@emotion/core': toPath('node_modules/@emotion/react'),
          'emotion-theming': toPath('node_modules/@emotion/react'),
        },
      },
    };
  },
};

export default config;
