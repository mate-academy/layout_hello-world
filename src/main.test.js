/* eslint-disable no-useless-escape */
/* eslint-disable no-undef */
'use strict';

const childProcess = require('child_process');
const maxVersionOfNode = 150000;
const minVersionOfNode = 140000;
const minVersionOfGitOnMacAndLinux = 2311;
const minVersionOfGitOnWindows = 23110;

function getNodeVersion() {
  const versionName = childProcess.execSync('node -v').toString();

  const [, major, minor, patch] = versionName.match(/.*?(\d+)\.(\d+)\.(\d+).*/);
  const version = [major, minor, patch]
    .map(v => v.padStart(2, '0'))
    .join('');

  // eslint-disable-next-line no-console
  console.log('version: ', version);

  return Number(version);
}

describe('Environmental Check', () => {
  let OS;
  let nodeVersion;
  let allActiveProgrammes;
  let allProgrammes;
  let listOfExtensions;

  beforeAll(() => {
    try {
      nodeVersion = getNodeVersion();
    } catch (error) {
      nodeVersion = null;
    }

    try {
      listOfExtensions = childProcess.execSync(
        'code --list-extensions --show-versions'
      ).toString();
    } catch (error) {
      listOfExtensions = null;
    }

    try {
      childProcess.execSync('systeminfo');
      OS = 'Windows';
      allActiveProgrammes = childProcess.execSync('tasklist').toString();
    } catch (error) {
      try {
        childProcess.execSync('lsb_release -a');
        allProgrammes = childProcess.execSync('dpkg -l').toString();
        OS = 'Linux';
      } catch (e) {
        OS = 'MacOS';
      }
    }
  });

  test('You should have Node.js of 14 version', () => {
    expect(
      (
        nodeVersion >= minVersionOfNode
          && nodeVersion < maxVersionOfNode
      )
    )
      .toBeTruthy();
  });

  test('You should have Git of 2.31.1 version or newer', () => {
    const version = childProcess.execSync(
      'git --version'
    ).toString().replace(/[^0-9]/g, '');

    if (OS === 'Windows') {
      expect(version >= minVersionOfGitOnWindows)
        .toBeTruthy();
    } else {
      expect(version >= minVersionOfGitOnMacAndLinux)
        .toBeTruthy();
    }
  });

  test('You should have Bash Shell', () => {
    const bashPath = childProcess.execSync('which bash').toString();

    expect(!!bashPath)
      .toBeTruthy();
  });

  test('You should have Visual Studio Code', () => {
    const VSCodeVersion = childProcess.execSync(
      'code -v'
    ).toString();

    expect(!!VSCodeVersion)
      .toBeTruthy();
  });

  test(`You should have EditorConfig extension in Visual Studio Code`, () => {
    expect(listOfExtensions)
      .toContain('EditorConfig.EditorConfig');
  });

  test(`You should have ESLint extension in Visual Studio Code`, () => {
    expect(listOfExtensions)
      .toContain('dbaeumer.vscode-eslint');
  });

  test(`You should have LintHTML v.0.4.0 extension in VisualStudioCode`, () => {
    expect(listOfExtensions)
      .toContain('kamikillerto.vscode-linthtml@0.4.0');
  });

  test(`You should have Stylelint extension in Visual Studio Code`, () => {
    expect(listOfExtensions)
      .toContain('stylelint.vscode-stylelint');
  });

  test('You should have Google Chrome or Firefox', () => {
    if (OS === 'Windows') {
      try {
        if (!allActiveProgrammes.includes('chrome.exe')) {
          childProcess.execSync('start chrome');
          childProcess.execSync('taskkill /im chrome.exe');

          expect(true)
            .toBeTruthy();
        }

        expect(true)
          .toBeTruthy();
      } catch (error) {
        if (!allActiveProgrammes.includes('firefox.exe')) {
          childProcess.execSync('start firefox');
          childProcess.execSync('taskkill /im firefox.exe');

          expect(true)
            .toBeTruthy();
        }

        expect(true)
          .toBeTruthy();
      }
    }

    if (OS === 'Linux') {
      const isGoogleChromeInstaled = allProgrammes.includes('google-chrome');
      const isFirefoxInstaled = allProgrammes.includes('firefox');

      expect(isGoogleChromeInstaled || isFirefoxInstaled)
        .toBeTruthy();
    }

    if (OS === 'MacOS') {
      const googleChromePath = childProcess.execSync(
        'mdfind -name google chrome'
      ).toString();
      const firefoxPath = childProcess.execSync(
        'mdfind -name firefox'
      ).toString();

      expect(!!googleChromePath || !!firefoxPath)
        .toBeTruthy();
    }
  });
});
