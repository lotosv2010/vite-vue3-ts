import { viteMockServe } from 'vite-plugin-mock';

export default function configMock(command: string) {
  return viteMockServe({
    // default
    mockPath: 'mock', // 解析根目录下的mock文件夹
    localEnabled: command === 'serve', // 开发打包开关
    prodEnabled: false, // 生产打包开关
    supportTs: true, // 打开后，可以读取 ts 文件模块。 请注意，打开后将无法监视.js 文件。
    watchFiles: true, // 监视文件更改
  });
}
