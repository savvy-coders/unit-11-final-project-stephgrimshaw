describe('should clear time after 5 seconds', () => {
    it('clears time', () => {
      cy.get('#timeCheckBtn').click();
      cy.wait(5000);
      cy.get('#time').should('have.text', '');
    });
  });
