module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:react/recommended', 'eslint:recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 2020,
    // ecmaVersion: 13,
    sourceType: 'module',
  },
  parser: '@typescript-eslint/parser',
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
  ignorePatterns: ['**/*.html'],
};
