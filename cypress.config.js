import { defineConfig } from 'cypress';

export default defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 20000, // Tempo de espera padrão para comandos (em ms)
  e2e: {
    baseUrl: 'https://notes-serverless-app.com', // Altere para a URL do seu projeto
    env: {
      viewportWidthBreakpoint: 768,
    },
  },
  projectId: 'z4q8x8',
});