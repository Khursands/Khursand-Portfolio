describe('Portfolio — Content sections', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('has a non-empty document title', () => {
    cy.title().should('have.length.greaterThan', 0);
  });

  it('renders the hero/home section', () => {
    cy.get('body').should('be.visible');
    cy.contains(/khursand/i).should('exist');
  });

  it('lists technical skills', () => {
    cy.sectionVisible('Skills');
    // Skill section renders technology logos / labels.
    cy.get('img, svg').its('length').should('be.greaterThan', 0);
  });

  it('shows at least one project entry', () => {
    cy.navigateTo('Projects');
    cy.contains(/project/i).should('exist');
  });

  it('exposes working external profile links', () => {
    cy.get('a[href*="github.com"]').should('have.attr', 'href').and('include', 'github.com');
    cy.get('a[href*="linkedin.com"]').should('exist');
  });
});
