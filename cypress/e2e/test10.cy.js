describe('should have footer with link', () => {
    it('has footer link', () => {
      cy.visit('/index.html');
      cy.get('footer').within(() => {
        cy.get('p').should('not.be.empty');
        cy.get('a').should('have.attr', 'href').and('include', 'page2.html');
      });
    });
  });
