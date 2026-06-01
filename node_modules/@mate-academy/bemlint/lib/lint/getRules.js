'use strict';

const rules = require('../rules');

function getRules(config) {
  return rules.filter(rule => config.rules[rule.id]);
}

module.exports = {
  getRules,
};
