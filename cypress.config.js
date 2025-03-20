const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://notes-serverless-app.com', // Altere para a URL do seu projeto
    env: {
      viewportWidthBreakpoint: 768,
    },
    chromeWebSecurity: false,
    defaultCommandTimeout: 20000, // Tempo de espera padrão para comandos (em ms)
    // setupNodeEvents(on, config) {
    //   // Configurações adicionais podem ser adicionadas aqui
    // },
  },
  projectId: 'z4q8x8',
});