describe('should have the correct title', () => {
    it('has correct title on index', () => {
      cy.visit('/index.html');
      cy.title().should('not.be.empty');
    });
  });
