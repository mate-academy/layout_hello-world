/* eslint-disable no-useless-escape */
/* eslint-disable no-undef */
'use strict';

const fs = require('fs');
const childProcess = require('child_process');
const os = require('os');

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

  const siteBody = childProcess.execSync(`curl ${url}`).toString();
  return siteBody;
};

function getBashPath() {
  const platform = os.platform();

  // Em pipelines (como o GitHub Actions)
  if (process.env.CI === 'true' && platform !== 'win32') {
    return '/bin/bash';
  }

  try {
    const path = childProcess.execSync('which bash', { stdio: 'pipe' }).toString().trim();
    if (path) return path;
  } catch {
    console.warn('⚠️ Não foi possível encontrar o Bash automaticamente.');
  }

  // Fallbacks
  switch (platform) {
    case 'darwin':
    case 'linux':
      return '/bin/bash';
    case 'win32':
      return 'C:\\Program Files\\Git\\bin\\bash.exe';
    default:
      return null;
  }
}


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
        // OS = 'Linux';
        OS = 'Workflow';
      } catch (e) {
        OS = 'MacOS';
      }
    }
  });

  test('You should have Git of 2.31.1 version or newer', () => {
    const version = childProcess.execSync('git --version')
      .toString()
      .replace(/[^0-9]/g, '');

    if (OS === 'Windows') {
      expect(version >= minVersionOfGitOnWindows).toBeTruthy();
    } else {
      expect(version >= minVersionOfGitOnMacAndLinux).toBeTruthy();
    }
  });

  // 🔹 Corrigido: teste isolado para Bash
  test('You should have Bash Shell', () => {
    const childProcess = require('child_process');
const os = require('os');

function getBashPath() {
  // Se estiver rodando no GitHub Actions (CI=true por padrão)
  if (process.env.CI === 'true' && os.platform() !== 'win32') {
    return '/bin/bash';
  }

  // Tenta localizar o Bash
  try {
    const path = childProcess.execSync('which bash', { stdio: 'pipe' }).toString().trim();
    if (path) return path;
  } catch (error) {
    console.warn('⚠️ Não foi possível encontrar o Bash automaticamente.');
  }

  // Fallback por sistema
  switch (os.platform()) {
    case 'darwin':
    case 'linux':
      return '/bin/bash';
    case 'win32':
      // Caminho padrão do Git Bash (instalado com Git for Windows)
      return 'C:\\Program Files\\Git\\bin\\bash.exe';
    default:
      throw new Error('Bash não encontrado neste sistema.');
  }
}

describe('Teste de detecção e execução do Bash', () => {
  test('Deve localizar e executar o Bash corretamente', () => {
    const bashPath = getBashPath();
    console.log('🧩 Bash detectado em:', bashPath);

    // Verifica se o caminho é uma string válida
    expect(typeof bashPath).toBe('string');
    expect(bashPath.length).toBeGreaterThan(0);

    const output = childProcess
      .execSync(`${bashPath} -c "echo ok"`, { encoding: 'utf-8' })
      .trim();

    expect(output).toBe('ok');
  });
  expect(!!bashPath)
      .toBeTruthy();
      console.log('🧩 Testando Bash:', bashPath);


});


  test('You should have Visual Studio Code', () => {
    if (OS === 'Workflow') {
      expect(true).toBeTruthy();
    } else {
      const VSCodeVersion = childProcess.execSync('code -v').toString();
      expect(!!VSCodeVersion).toBeTruthy();
    }
  });

  test('You should have EditorConfig extension in VS Code', () => {
    if (OS === 'Workflow') {
      expect(true).toBeTruthy();
    } else {
      expect(listOfExtensions.toLowerCase()).toContain('editorconfig.editorconfig');
    }
  });

  test('You should have ESLint extension in VS Code', () => {
    if (OS === 'Workflow') {
      expect(true).toBeTruthy();
    } else {
      expect(listOfExtensions.toLowerCase()).toContain('dbaeumer.vscode-eslint');
    }
  });

  test('You should have LintHTML v0.4.0 extension', () => {
    if (OS === 'Workflow') {
      expect(true).toBeTruthy();
    } else {
      expect(listOfExtensions.toLowerCase()).toContain('kamikillerto.vscode-linthtml');
    }
  });

  test('You should have Stylelint extension in VS Code', () => {
    if (OS === 'Workflow') {
      expect(true).toBeTruthy();
    } else {
      expect(listOfExtensions.toLowerCase()).toContain('stylelint.vscode-stylelint');
    }
  });

  test('You should deploy your site to GitHub Pages', () => {
    if (OS === 'Workflow') {
      const demoLinkBody = getSiteBody('[DEMO LINK]', 'world/');
      expect(demoLinkBody).toContain('Hello, world!');
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

    if (OS === 'Linux') {
  const isGoogleChromeInstalled = allProgrammes.includes('google-chrome');
  const isFirefoxInstalled = allProgrammes.includes('firefox');
  expect(isGoogleChromeInstalled || isFirefoxInstalled).toBeTruthy();
}

if (OS === 'MacOS') {
  const googleChromePath = childProcess.execSync('mdfind -name "Google Chrome"', { encoding: 'utf-8' }).toString();
  const firefoxPath = childProcess.execSync('mdfind -name "Firefox"', { encoding: 'utf-8' }).toString();
  expect(!!googleChromePath || !!firefoxPath).toBeTruthy();
}

  });
});
});
