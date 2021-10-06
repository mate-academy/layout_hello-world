/* eslint-disable no-useless-escape */
/* eslint-disable no-undef */
'use strict';

const childProcess = require('child_process');
const maxVersionOfNode = 15000;
const minVersionOfNode = 14000;
const maxVersionOfGitOnMac = 2311;
const maxVersionOfGitOnWindows = 23110;

describe('Environmental Check', () => {
  try {
    childProcess.execSync('systeminfo');

    const allEXEFilesOfC = childProcess.spawnSync(
      'Get-ChildItem -Path "C:\" *.exe -Recurse -ErrorAction SilentlyContinue',
      { 'shell': 'powershell.exe' },
    ).output.toString();
    const allEXEFilesOfD = childProcess.spawnSync(
      'Get-ChildItem -Path "D:\" *.exe -Recurse -ErrorAction SilentlyContinue',
      { 'shell': 'powershell.exe' },
    ).output.toString();
    const allEXEFilesOfE = childProcess.spawnSync(
      'Get-ChildItem -Path "E:\" *.exe -Recurse -ErrorAction SilentlyContinue',
      { 'shell': 'powershell.exe' },
    ).output.toString();
    const allEXEFilesOfF = childProcess.spawnSync(
      'Get-ChildItem -Path "F:\" *.exe -Recurse -ErrorAction SilentlyContinue',
      { 'shell': 'powershell.exe' },
    ).output.toString();
    const allEXEFilesOfG = childProcess.spawnSync(
      'Get-ChildItem -Path "G:\" *.exe -Recurse -ErrorAction SilentlyContinue',
      { 'shell': 'powershell.exe' },
    ).output.toString();
    const allEXEOfSystem = `
      ${allEXEFilesOfC}
      ${allEXEFilesOfD}
      ${allEXEFilesOfE}
      ${allEXEFilesOfF}
      ${allEXEFilesOfG}
    `;

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

      expect((version.replace(/[^0-9]/g, '') >= maxVersionOfGitOnWindows))
        .toBeTruthy();
    });

    test('You should have Bash Shell', () => {
      const bashPath = childProcess.execSync('which bash').toString();

      expect(!!bashPath)
        .toBeTruthy();
    });

    test('You should have Visual Studio Code or WebStorm', () => {
      const isInstalledWebStorm = allEXEOfSystem.includes('webstorm64.exe')
        || allEXEOfSystem.includes('webstorm32.exe');
      const isInstalledVSCode = allEXEOfSystem.includes('code.exe');

      expect(isInstalledWebStorm || isInstalledVSCode)
        .toBeTruthy();
    });

    test('You should have Google Chrome or Firefox', () => {
      const isInstalledGoogleChrome = allEXEOfSystem.includes('Chrome');
      const isInstalledFirefox = allEXEOfSystem.includes('firefox1.exe');

      expect(isInstalledGoogleChrome || isInstalledFirefox)
        .toBeTruthy();
    });

    if (allEXEOfSystem.includes('code.exe')) {
      test('You should have ESLint in Visual Studio Code', () => {
        const listOfExtensions = childProcess.execSync(
          'code --list-extensions'
        ).toString();

        expect(listOfExtensions)
          .toContain('dbaeumer.vscode-eslint');
      });
    }
  } catch (e) {
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

      expect((version.replace(/[^0-9]/g, '') >= maxVersionOfGitOnMac))
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
});
