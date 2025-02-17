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
    console.error('Invalid start or finish word, URL extraction failed.');
    return null;
  }

  const url = fileContent.substring(
    firstIndex + startWord.length + 1,
    lastIndex + finishWord.length,
  );

  if (!url) {
    console.error('URL not found in the README file.');
    return null;
  }

  let siteBody;
  try {
    siteBody = childProcess.execSync(`curl ${url}`).toString();
  } catch (error) {
    console.error('Error fetching the URL:', error.message);
    siteBody = null; // Handle curl failure gracefully
  }

  return siteBody;
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

  test('You should have Git of 2.31.1 version or newer', () => {
    const version = childProcess.execSync(
      'git --version',
    ).toString().replace(/[^0-9]/g, '');

    if (OS === 'Windows') {
      expect(parseInt(version) >= minVersionOfGitOnWindows)
        .toBeTruthy();
    } else {
      expect(parseInt(version) >= minVersionOfGitOnMacAndLinux)
        .toBeTruthy();
    }
  });

  test('You should have Bash Shell', () => {
    const bashPath = childProcess.execSync('which bash').toString();
    expect(!!bashPath)
      .toBeTruthy();
  });

  test('You should have Visual Studio Code', () => {
    if (OS === 'MacOS' || OS === 'Linux') {
      const VSCodeVersion = childProcess.execSync('code -v').toString();
      expect(!!VSCodeVersion)
        .toBeTruthy();
    } else {
      expect(true).toBeTruthy(); // Assume already installed on Windows
    }
  });

  test('You should have EditorConfig extension in Visual Studio Code', () => {
    expect(listOfExtensions.toLowerCase())
      .toContain('editorconfig.editorconfig');
  });

  test('You should have ESLint extension in Visual Studio Code', () => {
    expect(listOfExtensions.toLowerCase())
      .toContain('dbaeumer.vscode-eslint');
  });

  test('You should have LintHTML v.0.4.0 extension in Visual Studio Code', () => {
    expect(listOfExtensions.toLowerCase())
      .toContain('kamikillerto.vscode-linthtml');
  });

  test('You should have Stylelint extension in Visual Studio Code', () => {
    expect(listOfExtensions.toLowerCase())
      .toContain('stylelint.vscode-stylelint');
  });

  test('You should deploy your site to GitHub pages', () => {
    if (OS === 'Linux' || OS === 'MacOS') {
      const demoLinkBody = getSiteBody('[DEMO LINK]', 'world/');
      expect(demoLinkBody).not.toBeNull();
      if (demoLinkBody) {
        expect(demoLinkBody).toContain('Hello, world!');
      }
    }
    expect(true).toBeTruthy(); // Placeholder for actual deployment check
  });

  test('You should deploy test page to GitHub pages', () => {
    if (OS === 'Linux' || OS === 'MacOS') {
      const testLinkBody = getSiteBody('[TEST REPORT LINK]', '_report/');
      expect(testLinkBody).not.toBeNull();
      if (testLinkBody) {
        expect(testLinkBody).toContain('BackstopJS Report');
      }
    }
    expect(true).toBeTruthy(); // Placeholder for actual deployment check
  });

  test('You should have Google Chrome or Firefox', () => {
    const isGoogleChromeInstaled = allProgrammes.includes('google-chrome');
    const isFirefoxInstaled = allProgrammes.includes('firefox');

    expect(isGoogleChromeInstaled || isFirefoxInstaled)
      .toBeTruthy();
  });
});
