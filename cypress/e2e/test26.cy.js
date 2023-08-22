describe('should have no list style for ul', () => {
    it('has no list style', () => {
      cy.visit('/index.html');
      cy.get('ul').should('have.css', 'list-style-type', 'none');
    });
  });
