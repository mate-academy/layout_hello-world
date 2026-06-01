module.exports = {
  extends: '@mate-academy/eslint-config',
  env: {
    jest: true
  },
  rules: {
    'no-proto': 0,
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint', 'jest'
  ],
};
