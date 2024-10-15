'use strict';

// Import the base Backstop configuration
const backstop = require('@mate-academy/backstop-config');
const { basicScenario } = backstop;

// Define the BackstopJS configuration
const config = {
  ...backstop,  // Spread existing configuration properties
  fileNameTemplate: '{scenarioLabel}',  // Set filename template
  viewports: [
    {
      name: 'custom-size',  // Define a small custom viewport
      width: 200,
      height: 50,
    },
    // Add additional viewports as needed for testing
    {
      name: 'desktop',  // Example viewport for desktop testing
      width: 1920,
      height: 1080,
    },
  ],
  scenarios: [
    {
      ...basicScenario,  // Spread properties from basicScenario
      label: 'Entire document',  // Label for the test scenario
      referenceUrl: `${basicScenario.referenceUrl}/hello-world/`,  // Append to reference URL
      misMatchThreshold: 3,  // Adjust mismatch threshold to 3% to reduce false positives
      requireSameDimensions: false,  // Allow differences in dimensions if needed
    },
    // Additional scenarios can be added here
  ],
};

// Export the configuration for BackstopJS
module.exports = config;

