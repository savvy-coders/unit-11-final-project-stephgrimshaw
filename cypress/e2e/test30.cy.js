describe('should trigger display on click', () => {
    it('displays on click', () => {
      cy.visit('/index.html');
      cy.get('#timeCheckBtn').click();
      cy.get('div#time').should('not.be.empty');
    });
  });
