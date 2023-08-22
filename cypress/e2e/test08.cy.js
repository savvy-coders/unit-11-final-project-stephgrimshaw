describe('should have now-learning div', () => {
    it('has now-learning div', () => {
      cy.visit('/index.html');
      cy.get('div#now-learning.content').should('exist');
    });
  });
