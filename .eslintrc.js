module.exports = {
  env: {
    commonjs: true,
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/member-delimiter-style': 'off',
    'accessor-pairs': 'error',
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    'class-methods-use-this': 'error',
    'consistent-return': 'error',
    'default-case': 'error',
    'default-param-last': 'error',
    'guard-for-in': 'error',
    'grouped-accessor-pairs': 'error',
    'no-alert': 'error',
    'no-caller': 'error',
    'no-console': 'error',
    'no-else-return': 'error',
    'no-empty-function': 'warn',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-floating-decimal': 'error',
    'no-implicit-coercion': 'error',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-invalid-this': 'error',
    'no-iterator': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-param-reassign': 'error',
    'no-restricted-properties': 'error',
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unused-expressions': 'error',
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-useless-return': 'error',
    'no-void': 'error',
    'no-warning-comments': 'error',
    'prefer-named-capture-group': 'error',
    'prefer-promise-reject-errors': 'error',
    'prefer-named-capture-group': 'error',
    'prefer-regex-literals': 'error',
    'require-await': 'error',
  },
}
