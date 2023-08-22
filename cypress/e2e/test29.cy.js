describe('should display date/time on click', () => {
    it('displays date/time', () => {
      cy.visit('/index.html');
      cy.get('#timeCheckBtn').click();
      cy.get('#time').should('not.be.empty');
    });
  });
