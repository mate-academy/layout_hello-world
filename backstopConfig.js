'use strict';

// https://github.com/garris/BackstopJS#advanced-scenarios

const backstop = require('@mate-academy/backstop-config');
const { basicScenario } = backstop;

const DEMO_URL =
  'https://johannpdaniel.github.io/layout_hello-world/';

const REPORT_URL =
  'https://johannpdaniel.github.io/layout_hello-world/report/';

const config = {
  ...backstop,

  fileNameTemplate: '{scenarioLabel}_{viewportLabel}',

  viewports: [
    {
      name: 'custom-size',
      width: 200,
      height: 50,
    },
  ],

  scenarios: [
    // 🔹 CENÁRIO 1 — DEMO
    {
      ...basicScenario,
      label: 'Demo page',
      url: DEMO_URL,
      referenceUrl: DEMO_URL,
      testUrl: DEMO_URL,
      selectors: ['document'],
    },

    // 🔹 CENÁRIO 2 — BACKSTOP REPORT
    {
      ...basicScenario,
      label: 'Backstop report',
      url: REPORT_URL,
      referenceUrl: REPORT_URL,
      testUrl: REPORT_URL,
      selectors: ['document'],
    },
  ],
};

module.exports = config;
