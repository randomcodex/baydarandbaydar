// ESLint configuration for Baydar & Baydar project
// Includes rules for React, hooks, accessibility, and Prettier integration

import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import jsxA11y from 'eslint-plugin-jsx-a11y'; // Accessibility plugin
import prettier from 'eslint-plugin-prettier'; // Prettier plugin
import prettierConfig from 'eslint-config-prettier'; // Prettier config

export default [
  // Ignore the dist directory
  { ignores: ['dist'] },
  {
    // Apply rules to JavaScript and JSX files
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      'react-hooks': reactHooks, // React hooks rules
      'react-refresh': reactRefresh, // React refresh rules
      'jsx-a11y': jsxA11y, // Accessibility rules
      'prettier': prettier, // Prettier integration
    },
    rules: {
      // Recommended rules from ESLint, React hooks, and accessibility plugins
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,

      // Custom rules
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }], // Ignore constants
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'prettier/prettier': 'error', // Enforce Prettier formatting
    },
  },
];
