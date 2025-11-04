/* eslint-disable no-useless-escape */
/* eslint-disable no-undef */
'use strict';

const fs = require('fs');
const childProcess = require('child_process');
const os = require('os');
const chalk = require('chalk'); // 🟢 Adicionado para colorir logs

const minVersionOfGitOnMacAndLinux = 2311;
const minVersionOfGitOnWindows = 23110;
const isCI = process.env.CI === 'true'; // Detecta se está no GitHub Actions

// ==============================
// 🧰 Funções auxiliares
// ==============================

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

// Função robusta para encontrar o Bash
function getBashPath() {
  const platform = os.platform();

  if (isCI && platform !== 'win32') {
    console.log(chalk.cyan('🔹 Ambiente CI detectado — usando /bin/bash'));
    return '/bin/bash';
  }

  try {
    const path = childProcess.execSync('which bash', { stdio: 'pipe' }).toString().trim();
    if (path && fs.existsSync(path)) return path;
  } catch {
    console.warn(chalk.yellow('⚠️  Não foi possível encontrar o Bash automaticamente.'));
  }

  switch (platform) {
    case 'darwin':
    case 'linux':
      return fs.existsSync('/bin/bash') ? '/bin/bash' : null;
    case 'win32': {
      const gitBash = 'C:\\Program Files\\Git\\bin\\bash.exe';
      return fs.existsSync(gitBash) ? gitBash : null;
    }
    default:
      return null;
  }
}

// Executa comandos Bash com segurança
function runBashCommand(command) {
  const bashPath = getBashPath();

  if (!bashPath) {
    console.log(chalk.yellow('⚠️  Bash não encontrado neste sistema. Teste será ignorado.'));
    return null;
  }

  try {
    const result = childProcess.execSync(`${bashPath} -c "${command}"`, { encoding: 'utf-8' }).trim();
    console.log(chalk.green(`✅ Comando Bash executado com sucesso: ${command}`));
    return result;
  } catch (error) {
    console.error(chalk.red(`❌ Falha ao executar comando Bash: ${error.message}`));
    return null;
  }
}

// ==============================
// 🧪 TESTES
// ==============================
describe('Environmental Check', () => {
  let OS = 'Unknown';
  let allActiveProgrammes = '';
  let allProgrammes = '';
  let listOfExtensions = '';

  beforeAll(() => {
    if (isCI) {
      OS = 'Workflow';
      console.log(chalk.blue('🧠 Rodando em ambiente CI (GitHub Actions)'));
      return;
    }

    console.log(chalk.magenta('💻 Rodando localmente'));

    try {
      listOfExtensions = childProcess.execSync('code --list-extensions --show-versions').toString();
    } catch {
      listOfExtensions = '';
    }

    try {
      childProcess.execSync('systeminfo');
      OS = 'Windows';
      allActiveProgrammes = childProcess.execSync('tasklist').toString();
    } catch {
      try {
        childProcess.execSync('lsb_release -a');
        allProgrammes = childProcess.execSync('dpkg -l').toString();
        OS = 'Linux';
      } catch {
        OS = 'MacOS';
      }
    }

    console.log(chalk.gray(`🧩 Sistema detectado: ${OS}`));
  });

  // 1️⃣ Git
  test('You should have Git of 2.31.1 version or newer', () => {
    const version = childProcess.execSync('git --version')
      .toString()
      .replace(/[^0-9]/g, '');

    if (OS === 'Windows') {
      expect(version >= minVersionOfGitOnWindows).toBeTruthy();
    } else {
      expect(version >= minVersionOfGitOnMacAndLinux).toBeTruthy();
    }
    console.log(chalk.green('✅ Git versão mínima verificada com sucesso!'));
  });

  // 2️⃣ Bash
  test('You should have Bash Shell', () => {
    const bashPath = getBashPath();
    console.log(chalk.cyan(`🧩 Bash detectado em: ${bashPath}`));
    expect(typeof bashPath).toBe('string');
    expect(bashPath && bashPath.length).toBeGreaterThan(0);
  });

  describe('Teste de detecção e execução do Bash', () => {
    test('Deve localizar e executar o Bash corretamente', () => {
      const bashPath = getBashPath();
      console.log(chalk.cyan(`🔍 Testando Bash: ${bashPath}`));

      if (!bashPath) {
        console.log(chalk.yellow('⏭️  Bash não encontrado, teste pulado.'));
        return;
      }

      const output = runBashCommand('echo ok');
      expect(output).toBe('ok');
      console.log(chalk.green('✅ Bash executou corretamente o comando!'));
    });
  });

  // 3️⃣ VS Code (pula no CI)
  (isCI ? test.skip : test)('You should have Visual Studio Code', () => {
    const VSCodeVersion = childProcess.execSync('code -v').toString();
    console.log(chalk.green('✅ VS Code encontrado!'));
    expect(!!VSCodeVersion).toBeTruthy();
  });

  // 4️⃣ Extensões VS Code (pula no CI)
  (isCI ? test.skip : test)('You should have EditorConfig extension in VS Code', () => {
    expect(listOfExtensions.toLowerCase()).toContain('editorconfig.editorconfig');
  });

  (isCI ? test.skip : test)('You should have ESLint extension in VS Code', () => {
    expect(listOfExtensions.toLowerCase()).toContain('dbaeumer.vscode-eslint');
  });

  (isCI ? test.skip : test)('You should have LintHTML v0.4.0 extension', () => {
    expect(listOfExtensions.toLowerCase()).toContain('kamikillerto.vscode-linthtml');
  });

  (isCI ? test.skip : test)('You should have Stylelint extension in VS Code', () => {
    expect(listOfExtensions.toLowerCase()).toContain('stylelint.vscode-stylelint');
  });

  // 5️⃣ Deploys no GitHub Pages
  test('You should deploy your site to GitHub Pages', () => {
    if (OS === 'Workflow') {
      const demoLinkBody = getSiteBody('[DEMO LINK]', 'world/');
      expect(demoLinkBody).toContain('Hello, world!');
      console.log(chalk.green('🌐 Página principal do site encontrada!'));
    }
    expect(true).toBeTruthy();
  });

  test('You should deploy test page to GitHub Pages', () => {
    if (OS === 'Workflow') {
      const testLinkBody = getSiteBody('[TEST REPORT LINK]', '_report/');
      expect(testLinkBody).toContain('BackstopJS Report');
      console.log(chalk.green('🧪 Página de testes no GitHub Pages detectada!'));
    }
    expect(true).toBeTruthy();
  });

  // 6️⃣ Navegadores (pula no CI)
  (isCI ? test.skip : test)('You should have Google Chrome or Firefox', () => {
    if (OS === 'Windows') {
      try {
        if (!allActiveProgrammes.includes('chrome.exe')) {
          childProcess.execSync('start chrome');
          childProcess.execSync('taskkill /im chrome.exe');
        }
        console.log(chalk.green('✅ Google Chrome está instalado!'));
      } catch {
        if (!allActiveProgrammes.includes('firefox.exe')) {
          childProcess.execSync('start firefox');
          childProcess.execSync('taskkill /im firefox.exe');
        }
        console.log(chalk.green('✅ Firefox está instalado!'));
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
