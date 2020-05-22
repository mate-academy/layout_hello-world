'use strict';

const {
  series,
  parallel,
  task,
  src,
  watch,
  dest,
} = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const clean = require('gulp-clean');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const gulpReplacePath = require('gulp-replace-path');

const gulpStylelint = require('gulp-stylelint');
const gulpLintHTML = require('@linthtml/gulp-linthtml');
const gulpEslint = require('gulp-eslint');

const OPTION_PATTERN = /^\-{1,2}/;

const isOptionName = (argument) => OPTION_PATTERN.test(argument);
const getOptionName = (argument) => argument.replace(OPTION_PATTERN, '');

const parseCommandLineOptions = (argList) => {
  const options = {};

  let currentOptionName = null;

  const processOptionName = (argument) => {
    currentOptionName = getOptionName(argument);
    options[currentOptionName] = true;
  };

  const processOptionValue = (argument) => {
    if (currentOptionName) {
      options[currentOptionName] = argument;
    }

    currentOptionName = null;
  };

  const processArgument = (argument) => {
    const trimmedArgument = argument.trim();

    if (isOptionName(trimmedArgument)) {
      processOptionName(trimmedArgument);
    } else {
      processOptionValue(trimmedArgument);
    }
  };

  argList.forEach(processArgument);

  return options;
};

const args = parseCommandLineOptions(process.argv);

const distDirectory = args.destination || args.d || 'dist';
const htmlBlob = 'src/**/*.html';
const imagesBlob = 'src/images/**';
const fontsBlob = 'src/fonts/**';
const stylesBlob = ['src/**/*.css', 'src/**/*.scss'];
const jsBlob = 'src/**/*.js';

gulpLintHTML.description = 'Analyse all HTML files using linthtml';

/**
 * Clean
 */
task('cleanDist', () => (
  src(distDirectory, { read: false, allowEmpty: true })
    .pipe(clean())
));

/**
 * HTML
 */
task('lintHtml', () => (
  src(htmlBlob)
    .pipe(gulpLintHTML())
    .pipe(gulpLintHTML.format())
));

task('buildHtml', () => (
  src(htmlBlob)
    .pipe(dest(distDirectory))
));

task('processHtml', series('lintHtml', 'buildHtml'));

/**
 * Styles
 */
task('lintStyles', () => (
  src(stylesBlob)
    .pipe(gulpStylelint({
      failAfterError: false,
      reporters: [
        { formatter: 'string', console: true },
      ],
      debug: true,
    }))
));

task('buildStyles', () => (
  src(stylesBlob)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(gulpReplacePath(/(?:\.\.\/)+images/g, './images'))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('.'))
    .pipe(dest(distDirectory))
    // NOTE: need to leave here to pass changed styles to the BrowserSync
    .pipe(browserSync.reload({ stream: true }))
));

task('processStyles', series('lintStyles', 'buildStyles'));

/**
 * Javascript
 */
task('lintJavascript', () => (
  src(jsBlob)
    .pipe(gulpEslint())
    .pipe(gulpEslint.format())
));

task('buildJavascript', () => (
  src(jsBlob)
    .pipe(dest(distDirectory))
));

task('processJavascript', series('lintJavascript', 'buildJavascript'));

/**
 * Static
 */
task('processImages', () => (
  src(imagesBlob)
    .pipe(dest(`${distDirectory}/images/`))
));

task('processFonts', () => (
  src(fontsBlob)
    .pipe(dest(`${distDirectory}/fonts/`))
));

/**
 * Build
 */
task('build', series(
  'cleanDist',
  parallel(
    'processHtml',
    'processStyles',
    'processJavascript',
    'processImages',
    'processFonts',
  ),
));

/**
 * Serve
 */
task('serve', () => {
  browserSync.init({
    notify: false,
    server: {
      baseDir: distDirectory,
    },
    port: 8080,
  });

  watch(htmlBlob, series('processHtml'))
    .on('change', browserSync.reload);

  watch(imagesBlob, series('processImages'))
    .on('change', browserSync.reload);

  watch(fontsBlob, series('processFonts'))
    .on('change', browserSync.reload);

  watch(stylesBlob, series('processStyles'));

  watch(jsBlob, series('processJavascript'))
    .on('change', browserSync.reload);
});

/**
 * Default
 */
task('default', series('build', 'serve'));
