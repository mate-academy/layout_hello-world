'use strict';

// https://github.com/garris/BackstopJS#advanced-scenarios

const backstop = require('@mate-academy/backstop-config');

const { basicScenario } = backstop;

const config = {
  ...backstop,
  fileNameTemplate: '{scenarioLabel}',
  viewports: [
    {
      name: 'desktop',
      width: 1280,
      height: 720,
    },
    {
      name: 'mobile',
      width: 375,
      height: 667,
    }
  ],
  scenarios: [
    {
      ...basicScenario,
      label: 'Entire document',
      referenceUrl: basicScenario.referenceUrl + '/hello-world/',
    }
  ],
};

module.exports = config;
