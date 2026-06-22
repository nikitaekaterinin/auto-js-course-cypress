const footerSocialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/Hillel.IT.School',
  },
  { label: 'Telegram', href: 'https://t.me/ithillel_kyiv' },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/user/HillelITSchool?sub_confirmation=1',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/hillel_itschool/',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/school/ithillel/',
  },
];

const footerContactLinks = [
  { text: 'ithillel.ua', href: 'https://ithillel.ua' },
  {
    text: 'support@ithillel.ua',
    href: 'mailto:developer@ithillel.ua',
  },
];

describe('Hillel Qauto header and footer', () => {
  beforeEach(() => {
    cy.loginAsGuest();
    cy.get('header').should('be.visible');
  });

  it('finds all header links and buttons', () => {
    cy.get('header').within(() => {
      cy.get('a.header_logo')
        .should('be.visible')
        .and('have.attr', 'href', '/');

      cy.contains('a.header-link', 'Home')
        .should('be.visible')
        .and('have.attr', 'href', '/');

      cy.contains('button.header-link', 'About').should('be.visible');
      cy.contains('button.header-link', 'Contacts').should('be.visible');
      cy.contains('button.-guest', 'Guest log in').should('be.visible');
      cy.contains('button.header_signin', 'Sign In').should('be.visible');
    });

    cy.get('header').find('a, button').should('have.length', 6);
  });

  it('finds all social links in the contacts section', () => {
    cy.get('#contactsSection').scrollIntoView().should('be.visible');

    cy.get('#contactsSection .contacts_socials .socials_link').should(
      'have.length',
      footerSocialLinks.length,
    );

    footerSocialLinks.forEach(({ href }) => {
      cy.get('#contactsSection')
        .find(`a.socials_link[href="${href}"]`)
        .should('be.visible')
        .and('have.attr', 'target', '_blank')
        .and('have.attr', 'rel', 'nofollow');
    });
  });

  it('finds all contact links and footer logo', () => {
    cy.get('#contactsSection').scrollIntoView().should('be.visible');

    footerContactLinks.forEach(({ text, href }) => {
      cy.get('#contactsSection')
        .contains('a.contacts_link', text)
        .should('be.visible')
        .and('have.attr', 'href', href);
    });

    cy.get('footer').within(() => {
      cy.get('a.footer_logo')
        .should('be.visible')
        .and('have.attr', 'href', '/');
    });
  });
});
