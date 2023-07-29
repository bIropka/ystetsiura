module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  extends: ['@sanity/eslint-config-studio'],
  plugins: ['import', 'simple-import-sort'],
  rules: {},
}
