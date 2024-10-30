'use strict';

// Importa a configuração básica do BackstopJS
const backstop = require('@mate-academy/backstop-config');
const { basicScenario } = backstop;

// Configuração do BackstopJS
const config = {
  ...backstop,
  fileNameTemplate: '{scenarioLabel}', // Nome do arquivo para os cenários
  viewports: [
    {
      name: 'custom-size',
      width: 1280, // Largura padrão de desktop
      height: 800,  // Altura padrão de desktop
    },
  ],
  scenarios: [
    {
      ...basicScenario,
      label: 'Entire document', // Rótulo do cenário
      referenceUrl: 'https://tecnicorikardo.github.io/layout_hello-world', // URL do site publicado
      url: 'https://tecnicorikardo.github.io/layout_hello-world', // URL para o cenário de teste
      selectors: ['document'], // Seletores para capturar o documento inteiro
      readyEvent: 'DOMContentLoaded', // Aguarda o carregamento do DOM
      delay: 1000, // Espera um segundo após o carregamento
    },
  ],
};

// Exporta a configuração
module.exports = config;
