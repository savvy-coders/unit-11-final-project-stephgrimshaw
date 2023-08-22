describe('should have elements in vacation-content div on page 2', () => {
    it('has inner elements', () => {
      cy.visit('/page2.html');
      cy.get('div#vacation-content').within(() => {
        cy.get('h1').should('not.be.empty');
        cy.get('img').should('have.length.at.least', 1);
        cy.get('p').should('not.be.empty'); 
      });
    });
  });
