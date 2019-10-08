'use strict';
// https://github.com/garris/BackstopJS#advanced-scenarios

const backstop = require('@mate-academy/backstop-config');
const { basicScenario } = backstop;

const basic = {
  ...basicScenario,
  label: 'Elementary test',
  referenceUrl: basicScenario.referenceUrl + '/html-form/',
};

const config = {
  ...backstop,
  fileNameTemplate: '{scenarioLabel}-{selectorIndex}',
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
      label: 'Entire document',
      selectors: ['document'],
    },
    {
      ...basic,
      label: 'Form',
      selectors: ['form'],
    },
    {
      ...basic,
      label: 'Fieldset tag', // all fieldsets are different
      selectors: ['fieldset'],
    },
    {
      ...basic,
      label: 'Submit button',
      selectors: ['[type="submit"]'],
    },
    {
      ...basic,
      label: 'Email with placeholder',
      selectors: ['[type="email"][placeholder]'],
    },
    {
      ...basic,
      label: 'Number with value',
      selectors: ['[type="number"][value]'],
    },
  ],
};

module.exports = config;
