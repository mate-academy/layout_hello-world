'use strict';

const backstop = require('@mate-academy/backstop-config');
const { basicScenario } = backstop;

const config = {
  ...backstop,
  fileNameTemplate: '{scenarioLabel}',
  viewports: [
    {
      name: 'desktop',
      width: 1920,
      height: 1080,
    },
    {
      name: 'tablet',
      width: 768,
      height: 1024,
    },
    {
      name: 'mobile',
      width: 375,
      height: 667,
    },
  ],
  scenarios: [
    {
      ...basicScenario,
      label: 'Entire document',
      referenceUrl: basicScenario.referenceUrl + '/hello-world/',
      delay: 1000,
      captureFullPage: true,
      misMatchThreshold: 0.5, // Adjusted threshold
      hideSelectors: [], // Add any dynamic content selectors here
      removeSelectors: [], // Add any elements to remove here
    },
  ],
};

module.exports = config;
