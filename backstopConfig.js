'use strict';

// Importa a configuração básica do BackstopJS
const backstop = require('@mate-academy/backstop-config');
const { basicScenario } = backstop;

// Configuração do BackstopJS
const config = {
  ...backstop,
  fileNameTemplate: '{scenarioLabel}',
  viewports: [
    {
      name: 'custom-size',
      width: 1280, // Ajuste para uma largura padrão de desktop
      height: 800,  // Ajuste para uma altura padrão de desktop
    },
  ],
  scenarios: [
    {
      ...basicScenario,
      label: 'Entire document',
      referenceUrl: 'https://tecnicorikardo.github.io/layout_hello-world', // URL do seu site publicado
      url: 'https://tecnicorikardo.github.io/layout_hello-world', // URL para o cenário de teste
      selectors: ['document'], // Se você quiser capturar o documento inteiro
    },
  ],
};

// Exporta a configuração
module.exports = config;
