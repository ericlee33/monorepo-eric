describe('test', () => {
  it(() => {
    cy.visit('http://localhost:3000');
    cy.get('#abc').should('have.text', '123');
  });
});
