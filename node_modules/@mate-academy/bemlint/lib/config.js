'use strict';

const { findConfig } = require('./fs/findConfig');
const defaultConfig = require('./defaultConfig');

const config = findConfig();

const mergedConfig = {
  ...defaultConfig,
  ...config,
  ignore: config.ignore || defaultConfig.ignore,
  rules: config.rules || defaultConfig.rules,
};

mergedConfig.ignore = mergedConfig.ignore.map(pattern => (
  new RegExp(
    pattern
      .replace(/\*\*/g, `[^/]+`)
      .replace(/\*/, '[^/]+\\'),
  )
));

module.exports = {
  config: mergedConfig,
};
