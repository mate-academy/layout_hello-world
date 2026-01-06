'use strict';

const { ClassType } = require('../lint/classType');

module.exports = {
  id: 'element-inside-parent-block',
  type: ClassType.Element,
  check(className, {
    node,
    parentBlocks,
    config: {
      elementDivider,
    },
  }) {
    const parentBlock = className.split(elementDivider)[0];

    if (!parentBlocks.includes(parentBlock)) {
      return {
        id: this.id,
        node,
        className,
        massage: 'Element isn\'t inside the parent block',
      };
    }
  },
};
