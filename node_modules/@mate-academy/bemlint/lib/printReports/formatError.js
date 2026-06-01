'use strict';

const formatError = ({ massage, className, id, node }) => ({
  massage,
  className,
  ruleId: id,
  startLine: node.sourceCodeLocation.startLine,
  startCol: node.sourceCodeLocation.startCol,
});

module.exports = {
  formatError,
};
