module.exports = {
  root: true,
  env: { browser: true, node: true, es2022: true },
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module', ecmaFeatures: { jsx: true } },
  plugins: ['react', 'react-hooks'],
  extends: ['eslint:recommended', 'plugin:react-hooks/recommended'],
  rules: { 'react/jsx-uses-vars': 'error', 'react/jsx-uses-react': 'error' },
};
