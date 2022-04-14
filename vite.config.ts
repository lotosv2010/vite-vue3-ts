import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

import createVitePlugins from './config/plugins/index';
import server from './config/server';
import { VITE_APP_BASE } from './config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), ...createVitePlugins()],
  base: VITE_APP_BASE,
  server,
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
