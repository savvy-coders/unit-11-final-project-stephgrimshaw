describe('should have button with id', () => {
    it('has button', () => {
      cy.visit('/index.html');
      cy.get('button#timeCheckBtn').should('exist');
    });
  });
