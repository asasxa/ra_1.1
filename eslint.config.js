import js from '@eslint/js';
import globals from 'globals';
import stylistic from '@stylistic/eslint-plugin';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

/** @type { import('eslint').Linter.Config[] } */
export default [
  { ignores: [ 'dist', '*.json', '*.config.js' ] },
  {
    files: [ '**/*.{js,jsx}' ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      '@stylistic/indent': [ 'error', 2 ],
      '@stylistic/semi': [ 'error', 'always' ],
      '@stylistic/no-unused-vars': 'off',
      '@stylistic/no-console': 'off',
      '@/no-var': 'error',
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'no-unused-vars': [ 'error', { varsIgnorePattern: '^[A-Z_]' } ],
      'react-refresh/only-export-components': [ 'warn', { allowConstantExport: true } ],
    },
  },
  {
    files: [ '*.config.*' ],
    rules: {
      '@stylistic/no-underscore-dangle': [ 'off' ],
      '@stylistic/import/no-extraneous-dependencies': 'off',
    },
  },
  {
    plugins: { '@stylistic': stylistic, },
    rules: {
      '@stylistic/max-len': [ 'error', { code: 200 } ],
      '@stylistic/quotes': [ 'error', 'single' ],
      '@stylistic/array-bracket-spacing': [ 'error', 'always' ],
      '@stylistic/array-bracket-newline': [ 'error', { 'multiline': true, 'minItems': 3 } ],
      '@stylistic/object-curly-spacing': [ 'error', 'always' ],
      '@stylistic/object-curly-newline': [
        'error', { 'ObjectExpression': { 'multiline': true, 'minProperties': 3 } }
      ],
      '@stylistic/no-multi-spaces': [
        'error', {
          exceptions: {
            'Property': false,
            'BinaryExpression': true,
            'VariableDeclarator': true,
            'ImportDeclaration': true
          }
        }
      ],
      '@stylistic/key-spacing': [ 'error', { 'mode': 'strict' } ],
      '@stylistic/no-trailing-spaces': 'error',
      '@stylistic/no-multiple-empty-lines': [ 'error', { max: 1, maxBOF: 1 } ],
    },
  },
];