module.exports = {
  root: true,
  env: { browser: true },
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
      },
    },
  },
  plugins: ['simple-import-sort'],
  // parserOptions: {
  //   project: ['./tsconfig.json',
  // },
  rules: {
    // 'prettier/prettier': ['error'],
    // 'react/jsx-one-expression-per-line': 0,
    // 'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
    'import/prefer-default-export': 0,

    // Auto-sort imports
    'sort-imports': 'off',
    'import/order': 'off',
    'simple-import-sort/sort': 'error',

    // Using a type system makes it safe enough to spread props
    'react/jsx-props-no-spreading': 'off',
  },
};
