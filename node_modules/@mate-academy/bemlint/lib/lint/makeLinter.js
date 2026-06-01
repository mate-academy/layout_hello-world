'use strict';

const { Linter } = require('./Linter');
const { parseHtml } = require('./parseHtml');

function makeLinter(config) {
  const linter = new Linter(config);

  return content => {
    const node = parseHtml(content);

    return linter.linter(node);
  };
}

module.exports = {
  makeLinter,
};
