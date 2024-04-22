export default {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:promise/recommended',
    'plugin:storybook/recommended',
    'plugin:vitest/recommended',
    'plugin:@tanstack/eslint-plugin-query/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react', 'promise'],
  rules: {
    'no-extra-semi': 'off',
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        destructuredArrayIgnorePattern: '^_',
      },
    ],
    'no-unused-vars': 0,
    yoda: 'error',
  },
  settings: {
    react: {
      version: '999.999.999',
    },
  },
}
