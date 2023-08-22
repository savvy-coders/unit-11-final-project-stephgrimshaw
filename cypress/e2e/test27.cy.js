describe('should have font-size for li', () => {
    it('has font-size', () => {
      cy.visit('/index.html');
      cy.get('li').should('have.css', 'font-size').and('not.be.empty');
    });
  });
