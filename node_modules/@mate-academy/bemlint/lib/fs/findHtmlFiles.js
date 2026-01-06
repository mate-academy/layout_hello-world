'use strict';

const fs = require('fs');
const path = require('path');
const { shouldIgnoreFile } = require('./shouldIgnoreFile');

function findHtmlFiles(startPath) {
  if (shouldIgnoreFile(startPath)) {
    return [];
  }

  if (fs.statSync(startPath).isFile()) {
    return readFile(startPath);
  }

  return fs.readdirSync(startPath)
    .reduce((acc, dir) => ([
      ...acc,
      ...findHtmlFiles(path.join(startPath, dir)),
    ]), []);
}

function readFile(filePath) {
  if (path.extname(filePath) !== '.html') {
    return [];
  }

  return [{
    path: filePath,
    content: fs.readFileSync(filePath, 'utf-8'),
  }];
}

module.exports = {
  findHtmlFiles,
};
