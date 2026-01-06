'use script';

const { makeLinter } = require('./makeLinter');

function lint(files, config) {
  const linter = makeLinter(config);

  const reports = files.map(({ path, content }) => ({
    path,
    errors: linter(content),
  }));

  return reports;
}

module.exports = {
  lint,
};
