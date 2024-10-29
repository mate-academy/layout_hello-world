/* eslint-disable no-useless-escape */
/* eslint-disable no-undef */
'use strict';

const fs = require('fs');
const childProcess = require('child_process');

const getSiteBody = (startWord, finishWord) => {
  let fileContent;
  try {
    fileContent = fs.readFileSync('README.md', 'utf8');
  } catch (error) {
    console.error('README.md não encontrado', error);
    return '';
  }

  const firstIndex = fileContent.indexOf(startWord);
  const lastIndex = fileContent.indexOf(finishWord);
  const url = fileContent.substring(
    firstIndex + startWord.length + 1,  // +1 para ignorar o espaço
    lastIndex,
  ).trim();
  console.log(`Extraída URL: ${url}`);

  const siteBody = childProcess.execSync(`curl ${url}`).toString();
  return siteBody;
};

describe('Environmental Check', () => {
  let OS;
  let listOfExtensions = '';

  beforeAll(() => {
    try {
      listOfExtensions = childProcess.execSync(
        'code --list-extensions --show-versions',
      ).toString();
    } catch (error) {
      console.error('VSCode não encontrado', error);
    }

    try {
      childProcess.execSync('systeminfo');
      OS = 'Windows';
    } catch (error) {
      try {
        childProcess.execSync('lsb_release -a');
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
    expect(parseInt(version, 10)).toBeGreaterThanOrEqual(2311);
  });

  test('You should have Bash Shell', () => {
    const bashPath = OS === 'Windows' ? childProcess.execSync('where bash').toString() : childProcess.execSync('which bash').toString();
    expect(!!bashPath).toBeTruthy();
  });

  test('You should have Visual Studio Code', () => {
    let VSCodeVersion;
    try {
      VSCodeVersion = childProcess.execSync('code -v').toString();
    } catch (error) {
      VSCodeVersion = null;
      console.error('VSCode não encontrado', error);
    }
    expect(!!VSCodeVersion).toBeTruthy();
  });

  test('You should have EditorConfig extension in Visual Studio Code', () => {
    expect(listOfExtensions && listOfExtensions.toLowerCase()).toContain('editorconfig.editorconfig');
  });

  test('You should have ESLint extension in Visual Studio Code', () => {
    expect(listOfExtensions && listOfExtensions.toLowerCase()).toContain('dbaeumer.vscode-eslint');
  });

  test('You should have LintHTML v.0.4.0 extension in VisualStudioCode', () => {
    expect(listOfExtensions && listOfExtensions.toLowerCase()).toContain('kamikillerto.vscode-linthtml');
  });

  test('You should have Stylelint extension in Visual Studio Code', () => {
    expect(listOfExtensions && listOfExtensions.toLowerCase()).toContain('stylelint.vscode-stylelint');
  });

  test('You should deploy your site to GitHub pages', () => {
    const demoLinkBody = getSiteBody('[DEMO LINK]', '\n');
    expect(demoLinkBody).toContain('Hello, world!');
  });

  test('You should deploy test page to GitHub pages', () => {
    const testLinkBody = getSiteBody('[TEST REPORT LINK]', '\n');
    expect(testLinkBody).toContain('BackstopJS Report');
  });

  test('You should have Google Chrome or Firefox', () => {
    let browserFound = false;
    try {
      if (OS === 'Windows') {
        childProcess.execSync('start chrome');
        childProcess.execSync('taskkill /im chrome.exe');
        browserFound = true;
      } else {
        childProcess.execSync('google-chrome --version');
        browserFound = true;
      }
    } catch (error) {
      try {
        if (OS === 'Windows') {
          childProcess.execSync('start firefox');
          childProcess.execSync('taskkill /im firefox.exe');
          browserFound = true;
        } else {
          childProcess.execSync('firefox --version');
          browserFound = true;
        }
      } catch (e) {
        browserFound = false;
      }
    }
    expect(browserFound).toBeTruthy();
  });
});
