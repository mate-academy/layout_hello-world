/* eslint-disable no-useless-escape */
/* eslint-disable no-undef */
'use strict';

const fs = require('fs');
const childProcess = require('child_process');
const minVersionOfGitOnMacAndLinux = 2311;
const minVersionOfGitOnWindows = 23110;
// const versionName = childProcess.execSync('node -v').toString();

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
        // OS = 'Linux';
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
      expect(version >= minVersionOfGitOnWindows)
        .toBeTruthy();
    } else {
      expect(version >= minVersionOfGitOnMacAndLinux)
        .toBeTruthy();
    }
  })
});
