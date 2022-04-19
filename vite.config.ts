import { defineConfig, ConfigEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

import createVitePlugins from './config/plugins/index';
import createServer from './config/server';
import createBuild from './config/build';
import createCss from './config/style';
import { VITE_APP_BASE } from './config';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }: ConfigEnv) => ({
  plugins: [vue(), ...createVitePlugins(command)],
  base: VITE_APP_BASE,
  server: createServer(mode),
  build: createBuild(),
  css: createCss(),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      // 解决警告You are running the esm-bundler build of vue-i18n.
      'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
    },
  },
}));
