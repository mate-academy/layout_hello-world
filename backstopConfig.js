'use strict';

const backstop = require('@mate-academy/backstop-config');
const { basicScenario } = backstop;

const config = {
  ...backstop,

  scenarios: [
    {
      ...basicScenario,
      label: 'Entire document',
      referenceUrl: basicScenario.referenceUrl + '/hello-world/',
    },
  ],
};

module.exports = config;
