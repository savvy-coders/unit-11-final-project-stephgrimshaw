describe('should have 0 margin for body', () => {
    it('has 0 margin', () => {
      cy.visit('/index.html');
      cy.get('body').should('have.css', 'margin', '0px');
    });
  });
