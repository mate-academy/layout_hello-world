'use strict';

// https://github.com/garris/BackstopJS#advanced-scenarios

const backstop = require('@mate-academy/backstop-config');

const { basicScenario, viewports, scenarios } = backstop;

const basic = {
  ...basicScenario,
  label: 'Elementary test',
  referenceUrl: 'https://mate-academy.github.io/layout_solutions/hello-world/',
};

viewports.push({
  name: 'custom-size',
  width: 200,
  height: 50,
});

scenarios.push({
  ...basic,
});

module.exports = backstop;
