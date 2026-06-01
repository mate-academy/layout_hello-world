'use strict';

const { ClassType } = require('../lint/classType');

module.exports = {
  id: 'no-neighbour-parent-block',
  type: ClassType.Element,
  check(className, {
    node,
    blocks,
    config,
  }) {
    const parentBlock = className.split(config.elementDivider)[0];

    if (blocks.includes(parentBlock)) {
      return {
        id: this.id,
        node,
        className,
        massage: 'Tag can\'t have element together with his block',
      };
    }
  },
};
