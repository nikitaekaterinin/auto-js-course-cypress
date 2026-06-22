Cypress.Commands.add('loginAsGuest', () => {
  cy.visit('/', {
    auth: {
      username: 'guest',
      password: 'welcome2qauto',
    },
  });
});
