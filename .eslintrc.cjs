module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2020: true,
    jest: true,
  },
  extends: ['plugin:react/recommended', 'eslint:recommended', 'prettier'],
  ignorePatterns: ['dist', '.eslintrc.cjs', '**/*.html'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  parser: '@typescript-eslint/parser',
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
  settings: {
    react: {
      version: 'detect', // Reactのバージョンを自動検出
    },
  },
};
