import { defineConfig, ConfigEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

import createVitePlugins from './config/plugins/index';
import createServer from './config/server';
import { VITE_APP_BASE } from './config';

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv) => ({
  plugins: [vue(), ...createVitePlugins()],
  base: VITE_APP_BASE,
  server: createServer(mode),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
}));
