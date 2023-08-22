describe('should have text-decoration for h1', () => {
    it('has text-decoration', () => {
      cy.visit('/index.html');
      cy.get('h1').should('have.css', 'text-decoration').and('not.be.empty');
    });
  });
