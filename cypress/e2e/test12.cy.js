describe('should link to CSS on page 2', () => {
    it('links CSS', () => {
      cy.visit('/page2.html');
      cy.get('link[rel=stylesheet]').should('have.attr', 'href').and('include', 'styles.css');
    });
  });
