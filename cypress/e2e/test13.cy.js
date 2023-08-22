describe('should have vacation-content div on page 2', () => {
    it('has div', () => {
      cy.visit('/page2.html');
      cy.get('div#vacation-content').should('exist');
    });
  });
