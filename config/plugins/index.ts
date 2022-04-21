import configEslint from './eslint';
import configVisualizer from './visualizer';
import configHtml from './html';
import configCompression from './compression';
import configLegacy from './legacy';
import configMock from './mock';
import configStyleImport from './styleImport';
import { VITE_APP_VISUALIZER } from '../index';

export default function createVitePlugins(command: string) {
  const vitePlugins: any[] = [
    configEslint(),
    configHtml(),
    configCompression(),
    configLegacy(),
    configMock(command),
    configStyleImport(),
  ];
  VITE_APP_VISUALIZER && vitePlugins.push(configVisualizer());
  return vitePlugins;
}
