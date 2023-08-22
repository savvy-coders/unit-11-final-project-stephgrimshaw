describe('should have different text color for divs', () => {
    it('has text color', () => {
      cy.visit('/index.html');
      cy.get('div').should('have.css', 'color').and('not.be.empty');
    });
  });
