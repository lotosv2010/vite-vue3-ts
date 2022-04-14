import viteCompression from 'vite-plugin-compression';

export default function configCompression() {
  // gzip压缩 生产环境生成 .gz 文件
  return viteCompression({
    verbose: true,
    disable: false,
    threshold: 10240,
    algorithm: 'gzip',
    ext: '.gz',
  });
}
