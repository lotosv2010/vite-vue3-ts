module.exports = {
  tabWidth: 2,
  jsxSingleQuote: true,
  printWidth: 100,
  singleQuote: true,
  semi: true,
  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 200,
      },
    },
  ],
  arrowParens: 'always',
};
