'use strict';

const rule = require('../rules/one-element');
const { makeLinter } = require('../lint/makeLinter');
const defaultConfig = require('../defaultConfig');

describe(`Test ${rule.id} rule:`, () => {
  const config = {
    ...defaultConfig,
    rules: {
      ...defaultConfig.rules,
      [rule.id]: true,
    },
  };

  const linter = makeLinter(config);

  test(`should return error if BEM is invalid `, () => {
    const content = `
      <div class="bar">
        <div class="bar__foo bar__baz"></div>
      </div>
    `;

    const errors = linter(content);

    expect(errors[0].id).toBe(rule.id);
  });

  test(`shouldn't return error if BEM is valid`, () => {
    const content = `
      <div class="bar">
        <div class="bar__baz"></div>
      </div>
    `;

    const errors = linter(content);

    expect(errors.length).toBe(0);
  });
});
