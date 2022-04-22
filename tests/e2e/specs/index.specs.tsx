describe('home', () => {
  it('button click', () => {
    cy.visit('http://localhost:3002');
    cy.get('main');
  });
});
