'use strict';

// https://github.com/garris/BackstopJS#advanced-scenarios
const basicScenario = {
  label: 'test', // name of the test
  url: 'http://localhost:8080',
  referenceUrl: 'https://mate-academy.github.io/layout_solutions/html-form/',
  readyEvent: '',
  readySelector: '',
  delay: 1000,
  hideSelectors: ['[data-qa-hidden]'],
  removeSelectors: ['[data-qa-remove]'],
  hoverSelector: '',
  clickSelector: '',
  postInteractionWait: 0,
  selectors: '',
  selectorExpansion: true,
  expect: 0,
  misMatchThreshold: 1, // 1% of 100%
  requireSameDimensions: true
};

module.exports = {
  id: 'test',
  onBeforeScript: 'puppet/onBefore.js',
  onReadyScript: 'puppet/onReady.js',
  viewports: [
    {
      name: 'tablet_h',
      width: 1024,
      height: 768
    }
  ],
  scenarios: [
    {
      ...basicScenario,
      label: 'entire-document',
      selectors: ['document']
    },
    {
      ...basicScenario,
      label: 'form',
      selectors: ['form']
    },
    {
      ...basicScenario,
      label: 'fieldset', // test all fieldsets because all of them are different
      selectors: ['fieldset']
    },
    {
      ...basicScenario,
      label: 'submit-button',
      selectors: ['[type="submit"]']
    },
    {
      ...basicScenario,
      label: 'field-placeholder',
      selectors: ['[data-qa="field-placeholder"]']
    },
    {
      ...basicScenario,
      label: 'field-placeholder',
      selectors: ['[data-qa="field-value"]']
    }
    // define here scenarios for testing
  ],
  paths: {
    bitmaps_reference: 'backstop_data/bitmaps_reference',
    bitmaps_test: 'backstop_data/bitmaps_test',
    engine_scripts: 'backstop_data/engine_scripts',
    html_report: 'backstop_data/html_report',
    ci_report: 'backstop_data/ci_report'
  },
  report: ['browser'],
  engine: 'puppeteer',
  engineOptions: {
    args: ['--no-sandbox']
  },
  asyncCaptureLimit: 5,
  asyncCompareLimit: 50,
  debug: false,
  debugWindow: false
};
