'use strict';

const { ClassType } = require('../lint/classType');

module.exports = {
  id: 'one-block',
  type: ClassType.Block,
  check(className, {
    node,
    blocks,
  }) {
    if (blocks.length > 1) {
      return {
        id: this.id,
        node,
        className,
        massage: 'Tag can\'t have more than one block',
      };
    }
  },
};
