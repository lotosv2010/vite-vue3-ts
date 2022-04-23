module.exports = {
  preset: 'ts-jest',
  roots: ['<rootDir>'],
  moduleDirectories: ['node_modules', 'src'],
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest', // vue 文件用 vue-jest 转换
    '^.+\\.tsx?$': 'ts-jest', // ts 文件用 ts-jest 转换
  },
  testRegex: '(tests.unit.*.(test|spec)).(jsx?|tsx?)$',
  moduleFileExtensions: ['vue', 'ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.{vue, ts,tsx,js,jsx}'],
  coverageDirectory: '<rootDir>/coverage/',
  verbose: true,
  testTimeout: 30000,
  // 为了修复 Consider using the "jsdom" test environment. 问题
  testEnvironment: 'jsdom',
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/', '(.*).d.ts$'],
  moduleNameMapper: {
    '^@/(.*)': '<rootDir>/src/$1',
    '^.+\\.module\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2|svg)$': 'identity-obj-proxy',
  },
};
