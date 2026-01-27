describe("Login Sauce Demo", () => {
  it("should login with valid credentials", () => {
    cy.visit("https://www.saucedemo.com/");

    const username = Cypress.env("AUCE_USERNAME");
    const password = Cypress.env("SAUCE_PASSWORD");

    cy.get("#user-name").type(username, { log: false });
    cy.get("#password").type(password, { log: false });

    cy.get("#login-button").click();
    cy.url().should("include", "/inventory.html"); // Vérifie que login réussi
  });
});
