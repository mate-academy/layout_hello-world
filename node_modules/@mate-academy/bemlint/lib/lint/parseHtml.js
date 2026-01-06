'use strict';

const { parse } = require('parse5');

const parseConfig = {
  sourceCodeLocationInfo: true,
};

function parseHtml(html) {
  return parse(html, parseConfig);
}

module.exports = {
  parseHtml,
};
