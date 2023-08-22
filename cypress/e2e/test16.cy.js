describe('should have background color for body', () => {
    it('has background color', () => {
      cy.visit('/index.html');
      cy.get('body').should('have.css', 'background-color').and('not.be.empty');
    });
  });
