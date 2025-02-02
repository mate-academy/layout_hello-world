'use strict';

// https://github.com/garris/BackstopJS#advanced-scenarios

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
      referenceUrl: basicScenario.referenceUrl + '/hello-world/',
    },
  ],
  engineOptions: {
    puppeteer: {
      executablePath: 'C:Program FilesGoogleChromeApplicationchrome.exe', // Specify the path to your Chrome installation here
    },
  },
};

module.exports = config;
