describe('should clear date/time after 5 seconds', () => {
    it('clears date/time', () => {
      cy.get('#timeCheckBtn').then(btn => {
        cy.log(btn); 
      })
      cy.wait(5000);
      cy.get('#time').should('be.empty');
    });
  });