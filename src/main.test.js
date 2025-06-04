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

  if (firstIndex === -1 || lastIndex === -1) {
    throw new Error('Could not find the test link in readme.md');
  }

  const url = fileContent.substring(
    firstIndex + startWord.length + 1,
    lastIndex + finishWord.length,
  );

  try {
    const siteBody = childProcess.execSync(
      `curl -L --silent ${url}`,
    ).toString();
    return siteBody;
  } catch (error) {
    throw new Error(`Failed to fetch URL: ${url}`);
  }
};

describe('Environmental Check', () => {
  let OS;
  let allActiveProgrammes;
  let allProgrammes;
  let listOfExtensions;

  beforeAll(() => {
    try {
      listOfExtensions = childProcess.execSync(
        'code --list-extensions --show-versions',
      ).toString();
    } catch {
      listOfExtensions = null;
    }

    try {
      childProcess.execSync('systeminfo');
      OS = 'Windows';
      allActiveProgrammes = childProcess.execSync('tasklist').toString();
    } catch {
      try {
        childProcess.execSync('lsb_release -a');
        allProgrammes = childProcess.execSync('dpkg -l').toString();
        OS = 'Workflow';
      } catch {
        OS = 'MacOS';
      }
    }
  });

  test('You should have Git of 2.31.1 version or newer', () => {
    const version = childProcess.execSync(
      'git --version',
    ).toString().replace(/[^0-9]/g, '');

    const isValid = OS === 'Windows'
      ? version >= minVersionOfGitOnWindows
      : version >= minVersionOfGitOnMacAndLinux;

    expect(isValid).toBeTruthy();
  });

  test('You should have Bash Shell', () => {
    const bashPath = childProcess.execSync('which bash').toString();
    expect(!!bashPath).toBeTruthy();
  });

  test('You should have Visual Studio Code', () => {
    if (OS === 'Workflow') {
      expect(true).toBeTruthy();
    } else {
      const VSCodeVersion = childProcess.execSync('code -v').toString();
      expect(!!VSCodeVersion).toBeTruthy();
    }
  });

  test('You should have EditorConfig extension in Visual Studio Code', () => {
    if (OS === 'Workflow') {
      expect(true).toBeTruthy();
    } else {
      expect(listOfExtensions.toLowerCase()).toContain('editorconfig.editorconfig');
    }
  });

  test('You should have ESLint extension in Visual Studio Code', () => {
    if (OS === 'Workflow') {
      expect(true).toBeTruthy();
    } else {
      expect(listOfExtensions.toLowerCase()).toContain('dbaeumer.vscode-eslint');
    }
  });

  test('You should have LintHTML v.0.4.0 extension in VisualStudioCode', () => {
    if (OS === 'Workflow') {
      expect(true).toBeTruthy();
    } else {
      expect(listOfExtensions.toLowerCase()).toContain('kamikillerto.vscode-linthtml');
    }
  });

  test('You should have Stylelint extension in Visual Studio Code', () => {
    if (OS === 'Workflow') {
      expect(true).toBeTruthy();
    } else {
      expect(listOfExtensions.toLowerCase()).toContain('stylelint.vscode-stylelint');
    }
  });

  test('You should deploy your site to GitHub pages', () => {
    if (OS === 'Workflow') {
      try {
        const demoLinkBody = getSiteBody('[DEMO LINK]', 'world/');
        expect(demoLinkBody).toContain('Hello, world!');
      } catch (error) {
        console.error('Failed to fetch demo link:', error.message);
        expect(false).toBeTruthy();
      }
    } else {
      expect(true).toBeTruthy();
    }
  });

  test('You should deploy test page to GitHub pages', () => {
    if (OS === 'Workflow') {
      try {
        const testLinkBody = getSiteBody('[TEST REPORT LINK]', '_report/');
        expect(testLinkBody).toContain('BackstopJS Report');
      } catch (error) {
        console.error('Failed to fetch test report link:', error.message);
        expect(false).toBeTruthy();
      }
    } else {
      expect(true).toBeTruthy();
    }
  });

  test('You should have Google Chrome or Firefox', () => {
    if (OS === 'Windows') {
      try {
        if (!allActiveProgrammes.includes('chrome.exe')) {
          childProcess.execSync('start chrome');
          childProcess.execSync('taskkill /im chrome.exe');
        }
        expect(true).toBeTruthy();
      } catch {
        try {
          if (!allActiveProgrammes.includes('firefox.exe')) {
            childProcess.execSync('start firefox');
            childProcess.execSync('taskkill /im firefox.exe');
          }
          expect(true).toBeTruthy();
        } catch {
          expect(false).toBeTruthy();
        }
      }
    }

    if (OS === 'Linux') {
      const hasChrome = allProgrammes.includes('google-chrome');
      const hasFirefox = allProgrammes.includes('firefox');
      expect(hasChrome || hasFirefox).toBeTruthy();
    }

    if (OS === 'MacOS') {
      const chromePath = childProcess.execSync('mdfind -name google chrome').toString();
      const firefoxPath = childProcess.execSync('mdfind -name firefox').toString();
      expect(!!chromePath || !!firefoxPath).toBeTruthy();
    }
  });
});
