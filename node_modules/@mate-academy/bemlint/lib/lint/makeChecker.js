'use strict';

const { ClassType } = require('./classType');

function makeChecker(rules, config) {
  return ctx => {
    const {
      blocks,
      elements,
      modifiers,
    } = ctx;

    const classesByType = {
      [ClassType.Block]: blocks,
      [ClassType.Element]: elements,
      [ClassType.Modifier]: modifiers,
    };

    return rules
      .map((rule) => (
        classesByType[rule.type].map(
          cls => rule.check(cls, {
            ...ctx,
            config,
          }),
        )
      ))
      .flat()
      .filter(Boolean);
  };
}

module.exports = {
  makeChecker,
};
