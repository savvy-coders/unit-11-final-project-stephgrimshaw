describe('should have div with id time', () => {
    it('has time div', () => {
      cy.visit('/index.html');
      cy.get('div#time').should('exist');
    });
  });
