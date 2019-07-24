'use strict';

// https://github.com/garris/BackstopJS#advanced-scenarios

const backstop = require('@mate-academy/backstop-config');

const { basicScenario } = backstop;

const basic = {
  ...basicScenario,
  label: 'Elementary test',
  referenceUrl:
    'https://mate-academy.github.io/layout_solutions/html-form',
};

const config = {
  ...backstop,
  viewports: [
    {
      name: 'tablet_h',
      width: 1024,
      height: 768,
    },
  ],
  scenarios: [
    {
      ...basic,
      label: 'entire-document',
      selectors: ['document'],
    },
    {
      ...basic,
      label: 'form',
      selectors: ['form'],
    },
    {
      ...basic,
      label: 'fieldset', // test all fieldsets because all of them are different
      selectors: ['fieldset'],
    },
    {
      ...basic,
      label: 'submit-button',
      selectors: ['[type="submit"]'],
    },
    {
      ...basic,
      label: 'field-placeholder',
      selectors: ['[data-qa="field-placeholder"]'],
    },
    {
      ...basic,
      label: 'field-placeholder',
      selectors: ['[data-qa="field-value"]'],
    },
  ],
};

module.exports = config;
