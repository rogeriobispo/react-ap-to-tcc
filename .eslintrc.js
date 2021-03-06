module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'prettier'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier'
  ],
  'rules': {
    'prettier/prettier': 'error',
    "class-methods-use-this": 0,
    "react/jsx-filename-extension": 0,
    "react/destructuring-assignment": 0,
    "react/jsx-indent": 0,
    "react/jsx-indent-props": 0,
    'prettier/prettier': 0,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'no-restricted-globals': 0,
    'no-plusplus': 0,
    'eslint-disable-next-line': 0,
    'react/no-access-state-in-setstate': 0,
    'camelcase': 0,
    'array-callback-return': 0
  },
};
