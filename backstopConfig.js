'use strict';

// https://github.com/garris/BackstopJS#advanced-scenarios

const backstop = require('@mate-academy/backstop-config');
const { basicScenario } = backstop;

const PAGE_URL =
  'https://johannpdaniel.github.io/layout_hello-world/';

const config = {
  ...backstop,

  fileNameTemplate: '{scenarioLabel}',

  viewports: [
    {
      name: 'custom-size',
      width: 200,
      height: 50,
    },
  ],

  scenarios: [
    {
      ...basicScenario,
      label: 'Entire document',
      url: PAGE_URL,
      referenceUrl: PAGE_URL,
      testUrl: PAGE_URL,
      selectors: ['document'],
    },
  ],
};

module.exports = config;
