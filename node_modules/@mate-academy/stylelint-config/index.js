/** @type {import('stylelint').Config} */
module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-clean-order',
  ],
  plugins: [
    'stylelint-scss'
  ],
  rules: {
    'alpha-value-notation': null,
    'color-function-notation': null,
    'no-invalid-position-at-import-rule': null,
    'property-no-vendor-prefix': null,
    'value-keyword-case': null,
    'declaration-empty-line-before': ['always', {
      except: ['first-nested'],
      ignore: ['after-comment', 'after-declaration', 'inside-single-line-block']
    }],
    'function-url-quotes': null,
    'media-feature-range-notation': 'prefix',
    'number-max-precision': 2,
    'rule-empty-line-before': ['always', {
      ignore: ['after-comment', 'first-nested', 'inside-block']
    }],
    'selector-max-id': 0,
    'selector-max-universal': 1,
    'unit-no-unknown': [true, {
      ignoreUnits: ['fr'],
    }],
    'selector-class-pattern': null,
    'scss/dollar-variable-pattern': null,
    'scss/at-rule-no-unknown': [true, {
      ignoreAtRules: ['theme', 'plugin', 'apply', 'utility']
    }],
  },
};
