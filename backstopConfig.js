'use strict';

// Імпортуємо базову конфігурацію від Mate Academy
const backstop = require('@mate-academy/backstop-config');
const { basicScenario } = backstop;

const config = {
  ...backstop, // залишаємо всі базові налаштування
  fileNameTemplate: '{scenarioLabel}',
  viewports: [
    {
      name: 'custom-size',
      width: 200,
      height: 50,
    },
  ],
  scenarios: [
    {
      ...basicScenario,
      label: 'Entire document',
      url: "http://127.0.0.1:8080/index.html", // <- твій локальний сервер
    },
  ],
};

module.exports = config;
