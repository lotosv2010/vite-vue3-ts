import configEslint from './eslint';
export default function createVitePlugins() {
  const vitePlugins = [configEslint()];
  return vitePlugins;
}
