import js from '@eslint/js'
import importPlugin from 'eslint-plugin-import'
import litPlugin from 'eslint-plugin-lit'
import wcPlugin from 'eslint-plugin-wc'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  {
    ignores: [
      'dist/**/*',
      'build/**/*',
      'node_modules/**/*',
      '*.config.js',
      '*.config.mjs',
    ]
  },
  js.configs.recommended,

  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,

  {
    files: ['**/*.{ts,js}'],
    ignores: ['*.config.{ts,js,mjs}'],
    plugins: {
      'lit': litPlugin,
      'wc': wcPlugin,
      'import': importPlugin
    },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      parserOptions: {
        project: './tsconfig.json'
      }
    },
    rules: {
      'lit/no-invalid-html': 'error',
      'lit/no-useless-template-literals': 'error',
      'lit/no-value-attribute': 'error',
      'lit/no-invalid-escape-sequences': 'error',
      'lit/no-legacy-template-syntax': 'error',
      'lit/no-template-bind': 'error',
      'lit/no-duplicate-template-bindings': 'error',
      'lit/no-property-change-update': 'error',
      'lit/lifecycle-super': 'error',
      'lit/no-native-attributes': 'warn',
      'lit/prefer-static-styles': 'warn',
      'lit/prefer-nothing': 'warn',

      'wc/no-constructor-attributes': 'error',
      'wc/no-invalid-element-name': 'error',
      'wc/no-self-class': 'error',
      'wc/require-listener-teardown': 'warn',
      'wc/no-typos': 'warn',
      'wc/guard-super-call': 'warn',
      'import/no-unresolved': 'off',
      'import/named': 'off',
      'import/no-duplicates': 'error',
      'import/order': [
        'warn',
        {
          'groups': [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index'
          ],
          'newlines-between': 'always',
          'alphabetize': {
            'order': 'asc',
            'caseInsensitive': true
          }
        }
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          'argsIgnorePattern': '^_',
          'varsIgnorePattern': '^_'
        }
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-non-null-assertion': 'warn',
      '@typescript-eslint/prefer-nullish-coalescing': 'warn',
      '@typescript-eslint/prefer-optional-chain': 'warn',
      'no-console': 'warn',
      'no-debugger': 'error',
      'prefer-const': 'error',
      'no-var': 'error',
      'eqeqeq': 'error',
      'curly': 'error'
    }
  },
  {
    files: ['**/*.test.{ts,js}', '**/*.spec.{ts,js}', '**/test/**/*.{ts,js}'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      'no-console': 'off'
    }
  },
  {
    files: ['*.config.{ts,js,mjs}', 'vite.config.{ts,js}', 'rollup.config.{ts,js}'],
    rules: {
      'no-console': 'off',
      '@typescript-eslint/no-var-requires': 'off'
    }
  }
)