describe('should have header with text', () => {
    it('has header text', () => {
      cy.visit('/index.html');
      cy.get('header').should('not.be.empty');
    });
  });
