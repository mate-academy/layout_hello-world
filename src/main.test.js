/* eslint-disable no-useless-escape */
/* eslint-disable no-undef */
'use strict';

const fs = require('fs');
const childProcess = require('child_process');
const minVersionOfGitOnMacAndLinux = 2311;
const minVersionOfGitOnWindows = 23110;

const getSiteBody = (startWord, finishWord) => {
  const fileContent = fs.readFileSync('readme.md', 'utf8');
  const firstIndex = fileContent.indexOf(startWord);
  const lastIndex = fileContent.indexOf(finishWord);

  const url = fileContent.substring(
    firstIndex + startWord.length + 1,
    lastIndex + finishWord.length,
  );

  const siteBody = childProcess.execSync(
    `curl ${url}`,
  ).toString();

  return siteBody;
};

describe('Environmental Check', () => {
  let OS;
  let allActiveProgrammes;
  let allProgrammes;
  let listOfExtensions;

  beforeAll(() => {
    try {
      // Check for Windows
      childProcess.execSync('systeminfo');
      OS = 'Windows';
      allActiveProgrammes = childProcess.execSync('tasklist').toString();
    } catch (error) {
      try {
        // Check for Linux distributions
        const osReleaseContent = childProcess.execSync('cat /etc/os-release').toString();

        // Determine if it is Fedora
        if (osReleaseContent.includes('Fedora')) {
          OS = 'Fedora';
          allProgrammes = childProcess.execSync('rpm -qa').toString();
        } else {
          OS = 'Linux';
          allProgrammes = childProcess.execSync('dpkg -l').toString();
        }
      } catch (e) {
        try {
          // Check for Workflow
          childProcess.execSync('lsb_release -a');
          OS = 'Workflow';
        } catch (e) {
          // Default to MacOS if not Windows, Linux, Workflow, or Fedora
          OS = 'MacOS';
        }
      }
    }

    // Initialize listOfExtensions only if VS Code is expected
    if (OS !== 'Workflow') {
      try {
        listOfExtensions = childProcess.execSync(
          'code --list-extensions --show-versions',
        ).toString();
      } catch (error) {
        listOfExtensions = null; // Ensure it's null if command fails
      }
    }
  });

  test('You should have Git of 2.31.1 version or newer', () => {
    const version = childProcess.execSync(
      'git --version',
    ).toString().replace(/[^0-9]/g, '');

    if (OS === 'Windows') {
      expect(parseInt(version, 10) >= minVersionOfGitOnWindows)
        .toBeTruthy();
    } else {
      expect(parseInt(version, 10) >= minVersionOfGitOnMacAndLinux)
        .toBeTruthy();
    }
  });

  test('You should have Bash Shell', () => {
    const bashPath = childProcess.execSync('which bash').toString();

    expect(!!bashPath)
      .toBeTruthy();
  });

  test('You should have Visual Studio Code', () => {
    if (OS === 'Workflow') {
      expect(true)
        .toBeTruthy();
    } else {
      try {
        const VSCodeVersion = childProcess.execSync(
          'code -v',
        ).toString();
        expect(!!VSCodeVersion)
          .toBeTruthy();
      } catch (error) {
        // Report as failure if VS Code is not installed
        expect.fail('Visual Studio Code is not installed or not in the PATH.');
      }
    }
  });

  test(`You should have EditorConfig extension in Visual Studio Code`, () => {
    if (OS === 'Workflow') {
      expect(true)
        .toBeTruthy();
    } else {
      expect(listOfExtensions?.toLowerCase() || '')
        .toContain('editorconfig.editorconfig');
    }
  });

  test(`You should have ESLint extension in Visual Studio Code`, () => {
    if (OS === 'Workflow') {
      expect(true)
        .toBeTruthy();
    } else {
      expect(listOfExtensions?.toLowerCase() || '')
        .toContain('dbaeumer.vscode-eslint');
    }
  });

  test(`You should have LintHTML v.0.4.0 extension in Visual Studio Code`, () => {
    if (OS === 'Workflow') {
      expect(true)
        .toBeTruthy();
    } else {
      expect(listOfExtensions?.toLowerCase() || '')
        .toContain('kamikillerto.vscode-linthtml');
    }
  });

  test(`You should have Stylelint extension in Visual Studio Code`, () => {
    if (OS === 'Workflow') {
      expect(true)
        .toBeTruthy();
    } else {
      expect(listOfExtensions?.toLowerCase() || '')
        .toContain('stylelint.vscode-stylelint');
    }
  });

  test(`You should deploy your site to GitHub pages`, () => {
    if (OS === 'Workflow') {
      const demoLinkBody = getSiteBody('[DEMO LINK]', 'world/');

      expect(demoLinkBody)
        .toContain('Hello, world!');
    }

    expect(true)
      .toBeTruthy();
  });

  test(`You should deploy test page to GitHub pages`, () => {
    if (OS === 'Workflow') {
      const testLinkBody = getSiteBody('[TEST REPORT LINK]', '_report/');

      expect(testLinkBody)
        .toContain('BackstopJS Report');
    }

    expect(true)
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

    if (OS === 'Linux' || OS === 'Fedora') {
      const isGoogleChromeInstaled = allProgrammes.includes('google-chrome');
      const isFirefoxInstaled = allProgrammes.includes('firefox');

      expect(isGoogleChromeInstaled || isFirefoxInstaled)
        .toBeTruthy();
    }

    if (OS === 'MacOS') {
      const googleChromePath = childProcess.execSync(
        'mdfind -name google chrome',
      ).toString();
      const firefoxPath = childProcess.execSync(
        'mdfind -name firefox',
      ).toString();

      expect(!!googleChromePath || !!firefoxPath)
        .toBeTruthy();
    }
  });
});
