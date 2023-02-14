import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ssr from 'vite-plugin-ssr/plugin';
import mdx from '@mdx-js/rollup';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    mdx({ jsxImportSource: '@emotion/react' }),
    ssr({
      prerender: true,
    }),
  ],
});
