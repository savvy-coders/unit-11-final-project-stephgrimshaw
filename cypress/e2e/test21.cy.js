describe('should have background color for footer', () => {
    it('has bg color', () => {
      cy.visit('/index.html');
      cy.get('footer').should('have.css', 'background-color').and('not.be.empty');
    });
  });
