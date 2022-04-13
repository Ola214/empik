module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 'newline-per-chained-call': 'off'
    'linebreak-style': 0,
    "global-require": 0,
    "eslint linebreak-style": [0, "error", "windows"],
    "quotes": [2, "double", { "avoidEscape": true }],
    "comma-dangle": 0,
    "object-curly-spacing": "off",
    "import/extensions": ["error", "ignorePackages", { "vue": "always" }],
    "prefer-destructuring": 0,
    "vue/no-unused-components": 0,
    "no-unused-vars": 0
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
