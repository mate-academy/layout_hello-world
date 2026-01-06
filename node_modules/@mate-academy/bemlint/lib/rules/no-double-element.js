'use strict';

const { ClassType } = require('../lint/classType');

module.exports = {
  id: 'no-double-element',
  type: ClassType.Element,
  check(className, {
    node,
    config: {
      elementDivider,
    },
  }) {
    const hasDoubleElement = className
      .split(elementDivider).length > 2;

    if (hasDoubleElement) {
      return {
        id: this.id,
        node,
        className: className,
        massage: 'Element name can\'t consist of two parts',
      };
    }
  },
};
