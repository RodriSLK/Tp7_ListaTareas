import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';

export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      ecmaVersion: 2021, // Puedes ajustar a la versión que estás utilizando
      sourceType: 'module', // Esta línea es crucial
      globals: {
        ...globals.browser,
        cy: 'readonly',
        Cypress: 'readonly',
        test: 'readonly', // Para Jest
        expect: 'readonly', // Para Jest
      },
    },
    settings: {
      react: {
        version: 'detect', // O especifica la versión exacta
      },
    },
    plugins: {
      react: pluginReact,
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...pluginReact.configs.flat.recommended.rules,
    },
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'script',
    },
  },
];
