import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import {
  injectHtml
} from 'vite-plugin-html';

process.env.TARGET = process.env.TARGET || 'web';
const isCordova = process.env.TARGET === 'cordova';

const SRC_DIR = path.resolve(__dirname, './resources');
const VIEWS_DIR = path.resolve(__dirname, './resources/views');
const COMPONENTS_DIR = path.resolve(__dirname, './resources/components');
const ASSETS_DIR = path.resolve(__dirname, './resources/assets');
const ANIMATIONS_DIR = path.resolve(__dirname, './resources/assets/animations');
const PUBLIC_DIR = path.resolve(__dirname, './public');

export default defineConfig({
  plugins: [
    vue(),
    injectHtml({
      injectData: {
        TARGET: process.env.TARGET,
      },
    }),
  ],
  root: SRC_DIR,
  base: '',
  publicDir: PUBLIC_DIR,
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    assetsInlineLimit: 0,
    emptyOutDir: true,
    chunkSizeWarningLimit: 1024,
  },
  resolve: {
    alias: {
      '@': SRC_DIR,
      '@views': VIEWS_DIR,
      '@components': COMPONENTS_DIR,
      '@assets': ASSETS_DIR,
      '@animations': ANIMATIONS_DIR
    },
  },
  server: {
    host: true
  },

});
