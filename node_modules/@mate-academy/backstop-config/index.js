'use strict';

const port = process.env.PORT || 8080;

module.exports = {
  basicScenario: {
    label: '', // name of the test
    url: `http://localhost:${port}/index.html`,
    referenceUrl: 'https://mate-academy.github.io/layout_solutions', // put here reference to github-pages with ready project
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
    misMatchThreshold: 1.5, // 1.5% of 100%
    requireSameDimensions: false,
  },
  viewports: [
    // add viewports for test
  ],
  scenarios: [
    // define here scenarios for testing
  ],
  paths: {
    bitmaps_reference: 'backstop_data/bitmaps_reference',
    bitmaps_test: 'backstop_data/bitmaps_test',
    engine_scripts: 'backstop_data/engine_scripts',
    html_report: 'backstop_data/html_report',
    ci_report: 'backstop_data/ci_report',
  },
  report: ['browser'],
  engine: 'puppeteer',
  engineOptions: {
    args: ['--no-sandbox'],
  },
  asyncCaptureLimit: 5,
  asyncCompareLimit: 50,
  debug: false,
  debugWindow: false,
};
