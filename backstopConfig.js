'use strict';
<<<<<<< HEAD

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
  scenarios: [
    {
      ...basicScenario,
      label: 'Entire document',
      referenceUrl: basicScenario.referenceUrl + '/hello-world/',
    }],
=======
// https://github.com/garris/BackstopJS#advanced-scenarios

const backstop = require('@mate-academy/backstop-config');
const { basicScenario } = backstop;

const basic = {
  ...basicScenario,
  label: 'Elementary test',
  referenceUrl: basicScenario.referenceUrl + '/stars/',
};

const config = {
  ...backstop,
  fileNameTemplate: '{scenarioLabel}',
  viewports: [
    {
      name: 'tablet_h',
      width: 100,
      height: 100,
    },
  ],
  scenarios: [
    {
      ...basic,
      label: 'Entire document',
      selectors: ['document'],
    },
    {
      ...basic,
      label: 'stars--0',
      selectors: ['.stars--0'],
    },
    {
      ...basic,
      label: 'stars--1',
      selectors: ['.stars--1'],
    },
    {
      ...basic,
      label: 'stars--2',
      selectors: ['.stars--2'],
    },
    {
      ...basic,
      label: 'stars--3',
      selectors: ['.stars--3'],
    },
    {
      ...basic,
      label: 'stars--4',
      selectors: ['.stars--4'],
    },
    {
      ...basic,
      label: 'stars--5',
      selectors: ['.stars--5'],
    },
  ],
>>>>>>> bfc531d1f57d1fe105544f4ed93fe7641d5c64a4
};

module.exports = config;
