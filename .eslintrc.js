module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {},
  },
  extends: 'eslint:recommended',
  ignorePatterns: ['/lib/'],
  env: {
    browser: true,
    amd: true,
  },
  globals: {
    overwolf: 'readonly',
    Promise: 'readonly',
    Set: 'readonly',
  },
  rules: {
    semi: 'off',
    'no-async-promise-executor': 'off',
    'no-unused-vars': ['error', { args: 'all' }],
  },
}
