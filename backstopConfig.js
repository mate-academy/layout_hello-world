'use strict';

// Import the BackstopJS configuration
const backstop = require('@mate-academy/backstop-config');

// Destructure the basicScenario from the imported configuration
const { basicScenario } = backstop;

// Define the BackstopJS configuration object
const config = {
  ...backstop,
  // Template for naming the screenshot files
  fileNameTemplate: '{scenarioLabel}',
  // Define the viewports to test (desktop size)
  viewports: [
    {
      name: 'desktop',
      width: 1920,
      height: 1080,
    },
    {
      name: 'tablet',
      width: 768,
      height: 1024,
    },
    {
      name: 'mobile',
      width: 375,
      height: 667,
    },
  ],
  // Define the scenarios for the tests
  scenarios: [
    {
      ...basicScenario,
      // Label for the scenario
      label: 'Entire document',
      // Reference URL for the scenario
      referenceUrl: basicScenario.referenceUrl + '/hello-world/',
      // Add a delay to ensure the page is fully loaded before taking the screenshot
      delay: 1000,
      // Use the `captureFullPage` flag to capture the entire document
      captureFullPage: true,
      // Define selectors to hide if needed
      hideSelectors: [],
      // Define selectors to remove if needed
      removeSelectors: [],
      // Define custom ready event (optional)
      readyEvent: null,
      // Define any required JavaScript to run in the page context before the screenshot
      readySelector: null,
      // Define custom puppeteer scripts (optional)
      onReadyScript: null,
      // Specify if the scenario should scroll to capture the full document
      misMatchThreshold: 0.1,
    },
  ],
};

// Export the configuration object
module.exports = config;
