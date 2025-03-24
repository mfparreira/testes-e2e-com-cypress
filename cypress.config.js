const { defineConfig } = require('cypress');

module.exports = defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 25000, // Tempo de espera padrão para comandos (em ms)
  e2e: {
    baseUrl: 'https://notes-serverless-app.com', // Altere para a URL do seu projeto
    env: {
      viewportWidthBreakpoint: 768,
      specPattern: "cypress/e2e/**/*.cy.js",
      supportFile: "cypress/support/e2e.js",
    },
    overrides: [
      {
        files: ["cypress.config.js"], // Ignora o arquivo de configuração do Cypress
        parser: "espree", // Usando o parser padrão para arquivos JS
      }
    ],
  },
  projectId: 'z4q8x8',
});