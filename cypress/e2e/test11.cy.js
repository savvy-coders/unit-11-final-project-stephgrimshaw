describe('should have correct title on page 2', () => {
    it('has title', () => {
      cy.visit('/page2.html');
      cy.title().should('not.be.empty');
    });
  });
