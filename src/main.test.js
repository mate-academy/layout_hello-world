/* eslint-disable no-undef */
'use strict';

const childProcess = require('child_process');

describe('Environmental Check', () => {
  test('You should have Node.js of 14 version', () => {
    const version = childProcess.execSync('node -v').toString();

    expect(
      (
        version.replace(/[^0-9]/g, '') >= 14000
        && version.replace(/[^0-9]/g, '') < 15000
      )
    )
      .toBeTruthy();
  });

  test('You should have Git of 2.31.1 version or newer', () => {
    const version = childProcess.execSync('git --version').toString();

    expect((version.replace(/[^0-9]/g, '') >= 2311))
      .toBeTruthy();
  });

  test('You should have Bash Shell', () => {
    const bashPath = childProcess.execSync('which bash').toString();

    expect(!!bashPath)
      .toBeTruthy();
  });

  test('You should have Visual Studio Code or WebStorm', () => {
    const WebStormPath = childProcess.execSync(
      'mdfind -name webstorm'
    ).toString();
    const VSCodePath = childProcess.execSync('mdfind -name vscode').toString();

    expect(!!WebStormPath || !!VSCodePath)
      .toBeTruthy();
  });

  test('You should have Google Chrome or Firefox', () => {
    const googleChromePath = childProcess.execSync(
      'mdfind -name google chrome'
    ).toString();
    const firefoxPath = childProcess.execSync(
      'mdfind -name firefox'
    ).toString();

    expect(!!googleChromePath || !!firefoxPath)
      .toBeTruthy();
  });

  if (childProcess.execSync('which code')) {
    test('You should have ESLint in Visual Studio Code', () => {
      const listOfExtensions = childProcess.execSync(
        'code --list-extensions'
      ).toString();

      expect(listOfExtensions)
        .toContain('dbaeumer.vscode-eslint');
    });
  }
});
