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
      height: 5,
    },
    {
      name: '1024px',
      width: 1024,
      height: 768,
    },
    {
      name: '1200px',
      width: 1200,
      height: 768,
    },
  ],
  scenarios: [
    {
      ...basicScenario,
      label: 'Entire document',
      referenceUrl: basicScenario.referenceUrl + '/hello-world/',
    },
    {
      ...basic,
      label: 'Header tag',
      selectors: ['header'],
    },
    {
      ...basic,
      label: 'Nav tag',
      selectors: ['nav'],
    },
    {
      ...basic,
      label: 'Link with data-qa_hover',
      selectors: ['[data-qa="hover"]'],
      hoverSelector: '[data-qa="hover"]',
      postInteractionWait: 1000,
    },
    {
      ...basic,
      label: 'Link with class_is-active',
      selectors: ['a.is-active'],
    },
  ],
};

module.exports = config;
