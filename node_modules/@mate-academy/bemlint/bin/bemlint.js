#!/usr/bin/env node

const path = require('path');
const { Command } = require('commander');
const { version } = require('../package.json');
const { bemlint } = require('../lib/bemlint');

const program = new Command();

program
  .name('bemlint')
  .version(version, '-v --version', 'output current version');

program
  .option('[files...]')
  .description('check BEM in html')
  .action((_, destination) => (
    bemlint(path.join(process.cwd(), ...destination.args))
  ));

program.parse(process.argv);
