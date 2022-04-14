import configEslint from './eslint';
import configVisualizer from './visualizer';
import { VITE_APP_VISUALIZER } from '../index';

export default function createVitePlugins() {
  const vitePlugins: any[] = [configEslint()];
  VITE_APP_VISUALIZER && vitePlugins.push(configVisualizer());
  return vitePlugins;
}
