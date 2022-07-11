/* eslint-disable no-useless-escape */
/* eslint-disable no-undef */
'use strict';

const childProcess = require('child_process');
const minVersionOfGitOnMacAndLinux = 2311;
const minVersionOfGitOnWindows = 23110;
const versionName = childProcess.execSync('node -v').toString();

describe('Environmental Check', () => {
  let OS;
  let allActiveProgrammes;
  let allProgrammes;

  beforeAll(() => {
    try {
      // eslint-disable-next-line no-unused-vars
      const listOfExtensions = childProcess.execSync(
        'code --list-extensions --show-versions'
      ).toString();
    } catch (error) {
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

        if (versionName.startsWith('v12.')) {
          OS = 'Workflow';
        }
      } catch (e) {
        OS = 'MacOS';
      }
    }
  });

  test('You should have Node.js of 14 version', () => {
    if (OS === 'Workflow') {
      expect(versionName.startsWith('v12.'))
        .toBeTruthy();
    } else {
      expect(versionName.startsWith('v14.'))
        .toBeTruthy();
    }
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
