const STATUS = {
  OFF: 'off',
  WARN: 'warn'
}

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['standard', 'next', 'plugin:react/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 13,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/react-in-jsx-scope': STATUS.OFF,
    'eol-last': STATUS.OFF,
    quotes: STATUS.WARN
  }
}
