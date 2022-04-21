import { createStyleImportPlugin, ElementPlusResolve } from 'vite-plugin-style-import';

export default function configStyleImport() {
  return createStyleImportPlugin({
    resolves: [ElementPlusResolve()],
    libs: [
      {
        libraryName: 'element-plus',
        esModule: true,
        base: 'element-plus/theme-chalk/base.css',
        resolveStyle: (name) => {
          return `element-plus/theme-chalk/${name}.css`;
        },
      },
    ],
  });
}
