'use strict';

// https://github.com/garris/BackstopJS#advanced-scenarios

const backstop = require('@mate-academy/backstop-config');

const { basicScenario } = backstop;

const config = {
  ...backstop,
  viewports: [{
    name: 'custom-size',
    width: 200,
    height: 50,
  }],
  scenarios: [
    {
      ...basicScenario,
      label: 'Elementary test',
      referenceUrl:
        'https://mate-academy.github.io/layout_solutions/hello-world/',
    }],
};

module.exports = config;
