import html from '@html-eslint/eslint-plugin';
import parser from '@html-eslint/parser';

export default [
  {
    files: ['**/*.html'],
    plugins: {
      '@html-eslint': html,
    },
    languageOptions: {
      parser: parser,
    },
    extends: ['@mate-academy/eslint-config'],
    rules: {
      '@html-eslint/indent': ['error', 2],
      '@html-eslint/require-lang': 'error',
    },
  },
];
