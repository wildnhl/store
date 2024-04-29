module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard',
    'standard-with-typescript',
    'plugin:react/recommended',
    'next'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 0,
    semi: 0,
    '@typescript-eslint/semi': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    'space-before-function-paren': 0,
    '@typescript-eslint/space-before-function-paren': 0,
    '@typescript-eslint/member-delimiter-style': 0
  }
};
