'use strict';

// https://github.com/garris/BackstopJS#advanced-scenarios

const backstop = require('@mate-academy/backstop-config');

const { basicScenario } = backstop;

const config = {
  ...backstop,
  fileNameTemplate: '{scenarioLabel}',
  viewports: [
    {
      name: '1024px',
      width: 1024,
      height: 768,
    },
    {
      name: '1200px',
      width: 1200,
      height: 768,
    },
  ],
  scenarios: [
    {
      ...basicScenario,
      label: 'Entire document',
      // referenceUrl: basicScenario.referenceUrl + '/hello-world/',
      // delay: 500,
      // selector: ['viewport'],
      // misMatchThreshold: 0.1,
      url: './src/index.html',
      misMatchThreshold: 0.1,
      delay: 500,
      selectors: ['document'],
    },
  ],
};

module.exports = config;
