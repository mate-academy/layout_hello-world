#!/usr/bin/env node

'use strict';

const { findHtmlFiles } = require('../lib/fs/findHtmlFiles');
const { lint } = require('./lint');
const { config } = require('./config');
const { printReports } = require('./printReports/printReports');
const { formatError } = require('./printReports/formatError');

function bemlint(startPath) {
  const htmlFiles = findHtmlFiles(startPath);

  const reports = lint(htmlFiles, config);

  const formatReports = reports.map(({ path, errors }) => ({
    path,
    errors: errors.map(formatError),
  }));

  printReports(formatReports);

  const errorsCount = reports.some(({ errors }) => (
    errors.length > 0
  ));

  if (errorsCount) {
    process.exit(1);
  } else {
    process.exit(0);
  }
}

module.exports = {
  bemlint,
};
