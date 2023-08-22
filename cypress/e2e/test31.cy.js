describe('should display date/time on click', () => {
  it('displays date/time', () => {
    cy.visit('/');
    cy.get('#timeCheckBtn').click();
    cy.wait(5);
    cy.get('#time').should('not.be.empty');
  });
});