describe('Example spec', () => {
  it('visits the Cypress example site', () => {
    cy.visit('/');
    cy.contains('Kitchen Sink').should('be.visible');
  });
});
