import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

import createVitePlugins from './config/plugins/index';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), ...createVitePlugins()],
  server: {
    host: true,
    port: 3002,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
