// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import 'cypress-mochawesome-reporter/register';

// optional: take screenshot on failure (Cypress already does this by default when run headless)
afterEach(function () {
  // use function() to access `this.currentTest`
  if (this.currentTest && this.currentTest.state === 'failed') {
    const testName = this.currentTest.title.replace(/[:\/]/g, ''); 
    cy.screenshot(testName, { capture: 'runner' });
  }
});
