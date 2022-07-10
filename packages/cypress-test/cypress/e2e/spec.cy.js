// describe('My First Test', () => {
//   it('Visits the Kitchen Sink', () => {
//     cy.visit('https://example.cypress.io');
//   });
// });
describe('My First Test', () => {
  it('finds the content "type"', () => {
    cy.visit('https://example.cypress.io');

    cy.contains('type').click();
  });
});
