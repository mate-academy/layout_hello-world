'use strict';

const { makeChecker } = require('./makeChecker');
const { makeGetClasses } = require('./makeGetClasses');
const { getRules } = require('./getRules');

class Linter {
  constructor(config) {
    this.getClasses = makeGetClasses(config);

    this.checker = makeChecker(
      getRules(config),
      config,
    );
  }

  linter(node, parentBlocks = []) {
    const {
      blocks,
      elements,
      modifiers,
    } = this.getClasses(node);

    const errors = this.checker({
      node,
      parentBlocks,
      blocks,
      elements,
      modifiers,
    });

    const nextParentBlocks = blocks.length === 0 ? parentBlocks : blocks;

    if (node.childNodes) {
      const childNodesErrors = node.childNodes
        .map(child => this.linter(child, nextParentBlocks))
        .flat();

      return [
        ...errors,
        ...childNodesErrors,
      ];
    }

    return errors;
  }
}

module.exports = {
  Linter,
};
