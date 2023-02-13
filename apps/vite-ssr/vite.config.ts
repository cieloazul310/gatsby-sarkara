import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ssr from 'vite-plugin-ssr/plugin';
import mdx from '@mdx-js/rollup';
import { chakraComponents } from '@cieloazul310/sarkara';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), mdx({ jsxImportSource: '@emotion/react' }), ssr()],
});
