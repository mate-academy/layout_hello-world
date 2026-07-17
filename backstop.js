'use strict';

// https://github.com/garris/BackstopJS#advanced-scenarios

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

  "scenarios": [
    {
      "label": "Entire document",
      "url": "/index.html",
      "referenceUrl": "/index.html",
    }
  ]
};

module.exports = config;




