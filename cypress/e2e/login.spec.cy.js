describe('Login Sauce Demo', () => {
  it('should login with valid credentials', () => {
    cy.visit('https://www.saucedemo.com/')

    cy.fixture('user.json').then((user) => {
      cy.get('#user-name').type(user.username)
      cy.get('#password').type(user.password)
    })

    cy.get('#login-button').click()
    cy.url().should('include', '/inventory.html')  // Vérifie que login réussi
  })
})
