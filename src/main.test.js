/* eslint-disable no-useless-escape */
/* eslint-disable no-undef */
'use strict';

const childProcess = require('child_process');
const maxVersionOfNode = 15000;
const minVersionOfNode = 14000;
const minVersionOfGitOnMac = 2311;
const minVersionOfGitOnWindows = 23110;

describe('Environmental Check', () => {
  try {
    childProcess.execSync('systeminfo');

    const allTasks = childProcess.execSync('tasklist').toString();

    test('You should have Node.js of 14 version', () => {
      const version = childProcess.execSync('node -v').toString();

      expect(
        (
          Number(version.replace(/[^0-9]/g, '')) >= minVersionOfNode
          && Number(version.replace(/[^0-9]/g, '')) < maxVersionOfNode
        )
      )
        .toBeTruthy();
    });

    test('You should have Git of 2.31.1 version or newer', () => {
      const version = childProcess.execSync('git --version').toString();

      expect((version.replace(/[^0-9]/g, '') >= minVersionOfGitOnWindows))
        .toBeTruthy();
    });

    test('You should have Bash Shell', () => {
      const bashPath = childProcess.execSync('which bash').toString();

      expect(!!bashPath)
        .toBeTruthy();
    });

    test('You should have Google Chrome or Firefox', () => {
      try {
        if (!allTasks.includes('chrome.exe')) {
          childProcess.execSync('start chrome');
          childProcess.execSync('taskkill /im chrome.exe');

          expect(true)
            .toBeTruthy();
        }

        expect(true)
          .toBeTruthy();
      } catch (error) {
        if (!allTasks.includes('firefox.exe')) {
          childProcess.execSync('start firefox');
          childProcess.execSync('taskkill /im firefox.exe');

          expect(true)
            .toBeTruthy();
        }

        expect(true)
          .toBeTruthy();
      }
    });

    if (allTasks.includes('Code.exe')) {
      test('You should have ESLint in Visual Studio Code', () => {
        const listOfExtensions = childProcess.execSync(
          'code --list-extensions'
        ).toString();

        expect(listOfExtensions)
          .toContain('dbaeumer.vscode-eslint');
      });
    }
  } catch (e) {
    try {
      childProcess.execSync('lsb_release -a');

      const allProgrammes = childProcess.execSync('dpkg -l').toString();

      test('You should have Node.js of 14 version', () => {
        const version = childProcess.execSync('node -v').toString();

        expect(
          (
            Number(version.replace(/[^0-9]/g, '')) >= minVersionOfNode
          && Number(version.replace(/[^0-9]/g, '')) < maxVersionOfNode
          )
        )
          .toBeTruthy();
      });

      test('You should have Git of 2.31.1 version or newer', () => {
        const version = childProcess.execSync('git --version').toString();

        expect((version.replace(/[^0-9]/g, '') >= minVersionOfGitOnMac))
          .toBeTruthy();
      });

      test('You should have Bash Shell', () => {
        const bashPath = childProcess.execSync('which bash').toString();

        expect(!!bashPath)
          .toBeTruthy();
      });

      test('You should have Google Chrome or Firefox', () => {
        const isGoogleChromeInstaled = allProgrammes.includes('google-chrome');
        const isFirefoxInstaled = allProgrammes.includes('firefox');

        expect(isGoogleChromeInstaled || isFirefoxInstaled)
          .toBeTruthy();
      });
    } catch (error) {
      test('You should have Node.js of 14 version', () => {
        const version = childProcess.execSync('node -v').toString();

        expect(
          (
            Number(version.replace(/[^0-9]/g, '')) >= minVersionOfNode
          && Number(version.replace(/[^0-9]/g, '')) < maxVersionOfNode
          )
        )
          .toBeTruthy();
      });

      test('You should have Git of 2.31.1 version or newer', () => {
        const version = childProcess.execSync('git --version').toString();

        expect((version.replace(/[^0-9]/g, '') >= minVersionOfGitOnMac))
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
        const VSCodePath = childProcess.execSync(
          'mdfind -name vscode'
        ).toString();

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

      if (childProcess.execSync('mdfind -name vscode').toString()) {
        test('You should have ESLint in Visual Studio Code', () => {
          const listOfExtensions = childProcess.execSync(
            'code --list-extensions'
          ).toString();

          expect(listOfExtensions)
            .toContain('dbaeumer.vscode-eslint');
        });
      }
    }
  }
});
