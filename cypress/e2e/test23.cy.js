describe('should have centered body content', () => {
    it('has centered content', () => {
      cy.visit('/index.html');
      cy.get('body').should('have.css', 'text-align', 'center');
    });
  });
