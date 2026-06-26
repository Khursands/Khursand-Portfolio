const viewports = [
  ['iphone-x', 375, 812],
  ['ipad-2', 768, 1024],
  ['macbook-15', 1440, 900],
];

describe('Portfolio — Responsive layout', () => {
  viewports.forEach(([name, width, height]) => {
    it(`renders without overflow at ${name} (${width}x${height})`, () => {
      cy.viewport(width, height);
      cy.visit('/');
      cy.get('nav').should('be.visible');
      // No horizontal scrollbar should be introduced by the layout.
      cy.document().then((doc) => {
        expect(doc.documentElement.scrollWidth).to.be.at.most(width + 1);
      });
    });
  });
});
