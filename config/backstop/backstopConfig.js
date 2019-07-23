'use strict';

// https://github.com/garris/BackstopJS#advanced-scenarios

const backstop = require('@mate-academy/backstop-config');

const { basicScenario, viewports, scenarios } = backstop;

const config = {
  ...backstop,
  viewports: [...viewports, {
    name: 'custom-size',
    width: 200,
    height: 50,
  }],
  scenarios: [
    ...scenarios,
    {
      ...basicScenario,
      label: 'Elementary test',
      referenceUrl:
        'https://mate-academy.github.io/layout_solutions/hello-world/',
    }],
};

module.exports = config;
