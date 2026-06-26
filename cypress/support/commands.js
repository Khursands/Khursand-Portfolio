/**
 * Custom commands for the portfolio suite.
 */

// Click a react-scroll nav link by its visible text and assert the matching
// section scrolled into view.
Cypress.Commands.add('navigateTo', (label) => {
  cy.contains('nav a, a', new RegExp(`^${label}$`, 'i')).click();
});

// Assert an element containing the given text is visible within the viewport.
Cypress.Commands.add('sectionVisible', (text) => {
  cy.contains(new RegExp(text, 'i')).should('be.visible');
});
