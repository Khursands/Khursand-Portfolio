// Loaded automatically before every spec file.
import './commands';

// The portfolio is a single-page app using react-scroll. Fail the test on any
// uncaught application error so regressions surface loudly.
Cypress.on('uncaught:exception', () => true);
