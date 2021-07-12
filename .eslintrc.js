module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  plugins: ['react', 'react-native', 'module-resolver'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react-native/no-inline-styles': 0,
    'react-native/no-unused-styles': 2,
    'no-unused-vars': 1,
    'react-native/split-platform-components': 2,
    // 'react-native/no-raw-text': 2,
    'react-native/no-single-element-style-arrays': 2,
    'import/no-unresolved': [2, {commonjs: true, amd: true}],
    'import/named': 2,
    'import/namespace': 2,
    'import/default': 2,
    'import/export': 2,
    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'auto',
      },
    ],
    'prefer-const': [
      'warn',
      {
        destructuring: 'all',
      },
    ],
  },
  settings: {
    'import/ignore': ['node_modules'],
    'import/resolver': {
      'babel-module': {},
    },
  },
};
