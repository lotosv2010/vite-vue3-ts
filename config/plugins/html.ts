import { createHtmlPlugin } from 'vite-plugin-html';

export default function configHtml() {
  return createHtmlPlugin({
    minify: true,
  });
}
