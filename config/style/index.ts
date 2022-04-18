import { CSSOptions } from 'vite';

const createCss = (): CSSOptions => {
  return {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
      scss: {
        additionalData: '@import "./src/styles/index.scss";',
      },
    },
  };
};

export default createCss;
