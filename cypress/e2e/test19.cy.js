describe('should have font-family for p and h1', () => {
    it('has font-family', () => {
      cy.visit('/index.html');
      cy.get('p, h1').should('have.css', 'font-family', 'Arial, Helvetica, sans-serif');
    });
  });
