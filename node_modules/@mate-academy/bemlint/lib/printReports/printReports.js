/* eslint-disable max-len */
/* eslint-disable no-console */
'use strict';

const chalk = require('chalk');
const Table = require('table-layout');

function printReports(reports) {
  console.log(chalk.yellow('\n--- bemlint ---\n'));

  if (reports.length === 0) {
    console.log('html files not found\n');

    return;
  }

  const errorsCount = reports.reduce((acc, { errors }) => (
    acc + errors.length
  ), 0);

  if (errorsCount > 0) {
    reports.forEach(printReport);

    console.log(chalk.red(`${errorsCount} ${errorsCount > 1 ? 'errors' : 'error'}`));
    console.log(chalk.gray('https://mate-academy.github.io/fed/bemlint/rules-description.html'));
  } else {
    console.log('✨✨ Your BEM is fine! ✨✨\n');
  }
}

function printReport(report) {
  if (report.errors.length === 0) {
    return;
  }

  console.log(chalk.underline(report.path));

  const errors = report.errors.map(({
    massage, className, ruleId, startLine, startCol,
  }) => {
    return {
      positions: chalk.gray(`${startLine}:${startCol}`),
      level: chalk.red('error'),
      massage: massage,
      className: chalk.green(`[${className}]`),
      details: chalk.gray(`(${ruleId})`),
    };
  });

  const table = new Table(errors, { noTrim: true });

  console.log(table.toString());
}

module.exports = {
  printReports,
};
