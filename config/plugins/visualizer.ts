import visualizer from 'rollup-plugin-visualizer';

export default function configVisualizer() {
  return visualizer({
    // 将打包的依赖分析可视化页面，写到node_modules中，这样不占位置
    filename: './node_modules/.cache/visualizer/stats.html',
    open: true,
    gzipSize: true,
    brotliSize: true,
  });
}
