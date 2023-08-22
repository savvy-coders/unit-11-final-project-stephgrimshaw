describe('should have centered text for header and footer', () => {
    it('has centered text', () => {
      cy.visit('/index.html');
      cy.get('header, footer').should('have.css', 'text-align', 'center');
    });
  });
