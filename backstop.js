'use strict';

const backstop = require('@mate-academy/backstop-config');
const { basicScenario } = backstop;

const config = {
  ...backstop,
  fileNameTemplate: '{scenarioLabel}',
  viewports: [{
    name: 'custom-size',
    width: 200,
    height: 50,
  }],
scenarios: [
  {
    ...basicScenario,
    label: 'Entire document',
    referenceUrl: basicScenario.referenceUrl + '/hello-world/',
  },
],

  engine: 'puppeteer',
  engineOptions: {
    executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    args: ["--no-sandbox"]
  },
};

module.exports = config;
