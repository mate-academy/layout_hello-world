'use strict';

const { config, urls } = require('./backstopConfig');

module.exports = {
  ...config,
  scenarios: config.scenarios.map(scenario => ({
    ...scenario,
    url: urls.travis
  }))
};
