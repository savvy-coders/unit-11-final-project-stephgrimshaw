describe('should have footer with link on page 2', () => {
    it('has footer link', () => {
      cy.visit('/page2.html');
      cy.get('footer').within(() => {
        cy.get('p').should('not.be.empty');
        cy.get('a').should('have.attr', 'href').and('include', 'index.html');
      });
    });
  });
