describe('should have about-me div', () => {
    it('has about-me div', () => {
      cy.visit('/index.html');
      cy.get('div#about-me.content').should('exist');
    });
  });
