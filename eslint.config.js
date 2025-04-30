import js from '@eslint/js'

const nodeGlobals = {
  console: 'readonly',
  process: 'readonly',
  require: 'readonly',
  module: 'readonly',
  __dirname: 'readonly',
  __filename: 'readonly'
}

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: nodeGlobals
    },
    rules: {
      'semi': ['error', 'never'],
      'eol-last': ['error', 'always'],
      'no-console': 'off'
    }
  }
]
