import legacy from '@vitejs/plugin-legacy';

export default function configLegacy() {
  return legacy({
    // polyfills: ['es.promise', 'regenerator-runtime'],
    targets: ['ie >= 11', 'Android >= 39', 'Chrome >= 39', 'Safari >= 10.1', 'iOS >= 10', '> 0.5%'],
    additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
  });
}
