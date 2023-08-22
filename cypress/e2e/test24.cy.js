describe('should have font-weight for footer', () => {
    it('has font-weight', () => {
      cy.visit('/index.html');
      cy.get('footer').should('have.css', 'font-weight').and('not.be.empty');
    });
  });
