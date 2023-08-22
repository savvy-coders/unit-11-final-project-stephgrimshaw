describe('should have elements in about-me div', () => {
    it('has inner elements', () => {
      cy.visit('/index.html');
      cy.get('div#about-me').within(() => {
        cy.get('h1').should('not.be.empty');
        cy.get('img#my-pic').should('exist');
        cy.get('p').should('not.be.empty');
      });
    });
  });
