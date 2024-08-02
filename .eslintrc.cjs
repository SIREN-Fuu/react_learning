module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2020: true,
    jest: true,
  },
  extends: ['plugin:react/recommended', 'eslint:recommended', 'prettier'],
  globals: { React: true },
  ignorePatterns: ['dist', '.eslintrc.cjs', '**/*.html', 'cypress.config.ts'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  parser: '@typescript-eslint/parser',
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
  settings: {
    react: {
      version: 'detect', // Reactのバージョンを自動検出
    },
  },
};
