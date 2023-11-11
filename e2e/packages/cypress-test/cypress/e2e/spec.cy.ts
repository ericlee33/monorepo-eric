describe('My First Test', () => {
  it('finds the content "type"', () => {
    cy.visit('https://github.com/search?q=a&type=users');
    cy.wait(3000);
    // cy.read;

    // cy.contain('input[value="Follow"]').click();
    cy.contains('Follow').click();

    // cy.contains('input[id="login_field"]').type('ericlee');
  });
})