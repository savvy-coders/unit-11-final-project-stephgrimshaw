describe('should have border-radius for images', () => {
    it('has border-radius', () => {
      cy.visit('/index.html');
      cy.get('img').should('have.css', 'border-radius', '25px');
    });
  });
