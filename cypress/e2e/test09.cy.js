describe('should have elements in now-learning div', () => {
    it('has inner elements', () => {
      cy.visit('/index.html');
      cy.get('div#now-learning').within(() => {
        cy.get('h1').should('not.be.empty');
        cy.get('ul li').should('have.length.at.least', 1);
      });
    });
  });
