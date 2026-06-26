const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL || 'http://localhost:3000',
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: 'cypress/support/e2e.js',
    fixturesFolder: 'cypress/fixtures',
    video: false,
    viewportWidth: 1366,
    viewportHeight: 900,
    defaultCommandTimeout: 8000,
    retries: { runMode: 2, openMode: 0 },
  },
});
