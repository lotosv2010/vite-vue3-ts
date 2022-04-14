import configEslint from './eslint';
import configVisualizer from './visualizer';
import configHtml from './html';
import { VITE_APP_VISUALIZER } from '../index';

export default function createVitePlugins() {
  const vitePlugins: any[] = [configEslint(), configHtml()];
  VITE_APP_VISUALIZER && vitePlugins.push(configVisualizer());
  return vitePlugins;
}
