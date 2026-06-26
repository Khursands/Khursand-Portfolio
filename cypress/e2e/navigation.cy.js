describe('Portfolio — Navigation', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('renders the navbar with all section links', () => {
    ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].forEach((label) => {
      cy.contains('a', new RegExp(`^${label}$`, 'i')).should('exist');
    });
  });

  it('scrolls to the About section when its link is clicked', () => {
    cy.navigateTo('About');
    cy.sectionVisible('About');
  });

  it('scrolls to the Projects section when its link is clicked', () => {
    cy.navigateTo('Projects');
    cy.sectionVisible('Project');
  });

  it('keeps the navbar visible while scrolling', () => {
    cy.scrollTo('bottom');
    cy.get('nav').should('be.visible');
  });
});
