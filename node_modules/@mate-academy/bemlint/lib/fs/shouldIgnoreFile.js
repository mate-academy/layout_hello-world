'use strict';

const { config } = require('../config');

const shouldIgnoreFile = (pathToFile) => (
  config.ignore.some(regExp => regExp.test(pathToFile))
);

module.exports = {
  shouldIgnoreFile,
};
