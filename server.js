'use strict';

const browserSync = require('browser-sync');
const config = require('@mate-academy/browsersync-config');

browserSync({
  open: true,
  ...config,
});
