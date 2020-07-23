module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'prettier',
    'airbnb',
    'airbnb/hooks',
    'prettier/react',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
    'import/no-unresolved': 0,
    'import/extensions': [0, 'ignorePackages'],
  },
};
