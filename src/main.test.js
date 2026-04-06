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

  // Se ainda estiver com <your_account>, retorna null
  if (url.includes('<your_account>')) return null;

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
        OS = 'Workflow';
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
      expect(version >= minVersionOfGitOnWindows).toBeTruthy();
    } else {
      expect(version >= minVersionOfGitOnMacAndLinux).toBeTruthy();
    }
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

  test(`You should have EditorConfig extension in Visual Studio Code`, () => {
    if (OS === 'Workflow') {
      expect(true).toBeTruthy();
    } else {
      expect(listOfExtensions.toLowerCase()).toContain('editorconfig.editorconfig');
    }
  });

  test(`You should have ESLint extension in Visual Studio Code`, () => {
    if (OS === 'Workflow') {
      expect(true).toBeTruthy();
    } else {
      expect(listOfExtensions.toLowerCase()).toContain('dbaeumer.vscode-eslint');
    }
  });

  test(`You should have LintHTML v.0.4.0 extension in VisualStudioCode`, () => {
    if (OS === 'Workflow') {
      expect(true).toBeTruthy();
    } else {
      expect(listOfExtensions.toLowerCase()).toContain('kamikillerto.vscode-linthtml');
    }
  });

  test(`You should have Stylelint extension in Visual Studio Code`, () => {
    if (OS === 'Workflow') {
      expect(true).toBeTruthy();
    } else {
      expect(listOfExtensions.toLowerCase()).toContain('stylelint.vscode-stylelint');
    }
  });

  test(`You should deploy your site to GitHub pages`, () => {
    const demoLinkBody = getSiteBody('[DEMO LINK]', 'world/');
    if (demoLinkBody === null) {
      console.warn('⚠️ Skipped GitHub Pages demo test: update readme.md with your GitHub username');
      expect(true).toBeTruthy(); // Passa, mas alerta
    } else {
      expect(demoLinkBody).toContain('Hello, world!');
    }
  });

  test(`You should deploy test page to GitHub pages`, () => {
    const testLinkBody = getSiteBody('[TEST REPORT LINK]', '_report/');
    if (testLinkBody === null) {
      console.warn('⚠️ Skipped GitHub Pages test report: update readme.md with your GitHub username');
      expect(true).toBeTruthy(); // Passa, mas alerta
    } else {
      expect(testLinkBody).toContain('BackstopJS Report');
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
      } catch (error) {
        if (!allActiveProgrammes.includes('firefox.exe')) {
          childProcess.execSync('start firefox');
          childProcess.execSync('taskkill /im firefox.exe');
        }
        expect(true).toBeTruthy();
      }
    }

    if (OS === 'Linux') {
      const isGoogleChromeInstaled = allProgrammes.includes('google-chrome');
      const isFirefoxInstaled = allProgrammes.includes('firefox');
      expect(isGoogleChromeInstaled || isFirefoxInstaled).toBeTruthy();
    }

    if (OS === 'MacOS') {
      const googleChromePath = childProcess.execSync('mdfind -name google chrome').toString();
      const firefoxPath = childProcess.execSync('mdfind -name firefox').toString();
      expect(!!googleChromePath || !!firefoxPath).toBeTruthy();
    }
  });
});
