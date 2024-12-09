import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    rules: {
      'semi': ['error', 'always'], // Always require semicolons
      'quotes': ['error', 'single', { avoidEscape: true }], // Prefer single quotes
      'indent': ['error', 2], // Enforce 2-space tab width

      // Possible Problems
      'no-duplicate-imports': ['error'],
      'no-template-curly-in-string': ['error'],
      'no-use-before-define': ['error'],
      'no-useless-assignment': ['error'],
      'require-atomic-updates': ['error'],

      // Suggestions
      'arrow-body-style': ['error', 'as-needed'],
      'block-scoped-var': ['error'],
      'curly': ['error'], // Always use curly braces in control statements
      'default-case': ['error'], // Require a default case in switch statements
      'default-case-last': ['error'], // Enforce default case to be the last
      'default-param-last': ['error'],
      'eqeqeq': ['error'], // Require strict equality (===)
      'func-style': ['error', 'expression'],
      'grouped-accessor-pairs': ['error', 'getBeforeSet'],
      'no-else-return': ['error'],
      'no-empty-function': ['error'],
      'no-lonely-if': ['error'],
      'prefer-const': ['error'],

      // TypeScript-Specific Rules
      '@typescript-eslint/explicit-function-return-type': ['error'], // Require explicit return type for functions and methods

      // Vue-Specific Rules
      'vue/html-indent': ['error', 2], // Enforce 2-space indent in templates
      'vue/singleline-html-element-content-newline': 'off', // Don't enforce newlines for single-line HTML elements
      'vue/multiline-html-element-content-newline': 'error', // Require newlines for multi-line HTML elements
      'vue/max-attributes-per-line': [
        'error',
        {
          singleline: 1, // One attribute per line for single-line elements
          multiline: 1, // One attribute per line for multi-line elements
        },
      ],
      'vue/require-default-prop': 'off', // Disable required default props for Vue components
      'vue/no-multiple-template-root': 'off', // Allow multiple root nodes in Vue templates
    }
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,vue}'],
  },
  {
    languageOptions: { globals: globals.browser },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
      },
    },
  },
];
