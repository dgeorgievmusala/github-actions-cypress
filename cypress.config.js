const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //projectId: "24349fbb-a3c4-47cd-bb64-4e45a18cc762",
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "custom-title",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    videoOnFailOnly: true,
  },
  e2e: {
    baseUrl: "https://example.cypress.io",
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);

    },
  },
});
