'use strict';

const { ClassType } = require('../lint/classType');

module.exports = {
  id: 'one-element',
  type: ClassType.Element,
  check(className, {
    node,
    elements,
  }) {
    if (elements.length > 1) {
      return {
        id: this.id,
        node,
        className,
        massage: 'Tag can\'t have more than one element',
      };
    }
  },
};
