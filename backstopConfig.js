'use strict';

const backstop = require('@mate-academy/backstop-config');
const { basicScenario } = backstop;

const config = {
  scenarios: [
    {
      ...basicScenario,
      label: 'Entire document',
      referenceUrl: basicScenario.referenceUrl + '/hello-world/',
    },
  ],

  engine: 'puppeteer',
  engineOptions: {
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  },
};

module.exports = config;

