/* eslint-disable no-useless-escape */
/* eslint-disable no-undef */
'use strict';

const fs = require('fs');
const childProcess = require('child_process');

const minVersionOfGitOnMacAndLinux = 2311;
const minVersionOfGitOnWindows = 23110;

const extractLinkFromReadme = (label) => {
  const fileContent = fs.readFileSync('readme.md', 'utf8');
  const regex = new RegExp(`\

\[${label}\\]

\\(([^\\s)]+)\\)`, 'i');
  const match = fileContent.match(regex);
  return match ? match[1].trim() : null;
};

const getSiteBody = (url) => {
  if (!url) return '';
  try {
    return childProcess.execSync(`curl "${url}"`).toString();
  } catch (err) {
    return '';
  }
};

describe('Environmental Check', () => {
  let OS;
  let listOfExtensions = '';
  let allActiveProgrammes = '';
  let allProgrammes = '';

  beforeAll(() => {
    try {
      listOfExtensions = childProcess.execSync('code --list-extensions --show-versions').toString();
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
        OS = 'Workflow';
        allProgrammes = childProcess.execSync('dpkg -l').toString();
      } catch (e) {
        OS = 'MacOS';
      }
    }
  });

  test('You should have Git version >= 2.31.1', () => {
    const version = childProcess.execSync('git --version').toString().replace(/[^0-9]/g, '');
    const minVersion = OS === 'Windows' ? minVersionOfGitOnWindows : minVersionOfGitOnMacAndLinux;
    expect(Number(version) >= minVersion).toBeTruthy();
  });

  test('You should have Bash Shell', () => {
    const bashPath = childProcess.execSync('which bash').toString();
    expect(Boolean(bashPath)).toBeTruthy();
  });

  test('You should have Visual Studio Code', () => {
    if (OS === 'Workflow') return expect(true).toBeTruthy();
    const VSCodeVersion = childProcess.execSync('code -v').toString();
    expect(Boolean(VSCodeVersion)).toBeTruthy();
  });

  test('You should have EditorConfig extension in VS Code', () => {
    if (OS === 'Workflow') return expect(true).toBeTruthy();
    expect(listOfExtensions.toLowerCase()).toContain('editorconfig.editorconfig');
  });

  test('You should have ESLint extension in VS Code', () => {
    if (OS === 'Workflow') return expect(true).toBeTruthy();
    expect(listOfExtensions.toLowerCase()).toContain('dbaeumer.vscode-eslint');
  });

  test('You should have LintHTML extension in VS Code', () => {
    if (OS === 'Workflow') return expect(true).toBeTruthy();
    expect(listOfExtensions.toLowerCase()).toContain('kamikillerto.vscode-linthtml');
  });

  test('You should have Stylelint extension in VS Code', () => {
    if (OS === 'Workflow') return expect(true).toBeTruthy();
    expect(listOfExtensions.toLowerCase()).toContain('stylelint.vscode-stylelint');
  });

  test('You should deploy your site to GitHub Pages', () => {
    if (OS === 'Workflow') {
      const demoLink = extractLinkFromReadme('DEMO LINK');
      const body = getSiteBody(demoLink);
      expect(body).toContain('Hello, world!');
    } else {
      expect(true).toBeTruthy();
    }
  });

  test('You should deploy the test report to GitHub Pages', () => {
    if (OS === 'Workflow') {
      const reportLink = extractLinkFromReadme('TEST REPORT LINK');
      const body = getSiteBody(reportLink);
      expect(body).toContain('BackstopJS Report');
    } else {
      expect(true).toBeTruthy();
    }
  });

  test('You should have Chrome or Firefox installed', () => {
    if (OS === 'Windows') {
      const chrome = allActiveProgrammes.includes('chrome.exe');
      const firefox = allActiveProgrammes.includes('firefox.exe');
      expect(chrome || firefox).toBeTruthy();
    } else if (OS === 'Linux') {
      const chrome = allProgrammes.includes('google-chrome');
      const firefox = allProgrammes.includes('firefox');
      expect(chrome || firefox).toBeTruthy();
    } else if (OS === 'MacOS') {
      const chrome = childProcess.execSync('mdfind -name "Google Chrome"').toString();
      const firefox = childProcess.execSync('mdfind -name Firefox').toString();
      expect(Boolean(chrome || firefox)).toBeTruthy();
    } else {
      expect(true).toBeTruthy(); // Skip on Workflow
    }
  });
});
