export function loginSequence(cy, username, pwd) {
  cy.visit("/");
  cy.get('nav a[href="/login"]').click();
  cy.get("#username").type(username);
  cy.get("#password").type(pwd);
  cy.get('form input[type="button"]').click();
  cy.waitUntil(function () {
    return cy
      .get(".container > p:first-child")
      .should("not.contain", "NOT");
  });
}
