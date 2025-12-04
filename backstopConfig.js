'use strict';

const backstop = require('@mate-academy/backstop-config');

const { basicScenario } = backstop;

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
      url: 'http://localhost:8080/hello-world/',
      referenceUrl:
        'https://mate-academy.github.io/layout_solutions/hello-world/',
    },
  ],
};

module.exports = config;
