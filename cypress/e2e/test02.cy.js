describe('should link to CSS file', () => {
    it('links to CSS on index', () => {
      cy.visit('/index.html');
      cy.get('link[rel=stylesheet]').should('have.attr', 'href').and('include', 'styles.css');
    });
  });
