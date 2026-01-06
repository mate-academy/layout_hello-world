'use strict';

const { ClassType } = require('../lint/classType');

module.exports = {
  id: 'modifiable-class',
  type: ClassType.Modifier,
  check(className, {
    node,
    blocks,
    elements,
  }) {
    const hasModifiableClass = [
      ...elements,
      ...blocks,
    ].some(cls => className.includes(cls));

    if (!hasModifiableClass) {
      return {
        id: this.id,
        node,
        className,
        massage: 'Tag doesn\'t have modifiable class',
      };
    }
  },
};
