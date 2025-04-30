import js from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'

const nodeGlobals = {
  console: 'readonly',
  process: 'readonly',
  require: 'readonly',
  module: 'readonly',
  __dirname: 'readonly',
  __filename: 'readonly',
}

export default [
  js.configs.recommended,
  {
    plugins: {
      '@stylistic': stylistic,
    },
    languageOptions: {
      globals: nodeGlobals,
    },
    rules: {
      '@stylistic/semi': ['error', 'never'],
      '@stylistic/eol-last': ['error', 'always'],
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/indent': ['error', 2],

      '@stylistic/no-trailing-spaces': 'error',
      '@stylistic/no-multiple-empty-lines': ['error', { max: 1 }],
      '@stylistic/arrow-parens': ['error', 'as-needed'],
      '@stylistic/space-before-function-paren': ['error', 'never'],
      '@stylistic/space-infix-ops': 'error',

      'no-console': 'off',
    },
  },
]
