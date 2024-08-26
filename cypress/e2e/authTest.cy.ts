// https://on.cypress.io/api

describe('Login test features', () => {
  it('Enter to protected route without auth', () => {
    cy.visit('/character/1')
    cy.url().should('eq', 'http://localhost:4173/login')
  })

  it('User with wrong credentials can not pass', () => {
    cy.login('admin@admin.com', '1234')
    cy.contains('Incorrect email or password')
    cy.visit('/character/1')
    cy.url().should('eq', 'http://localhost:4173/login')
  })

  it('User with correct credentials can pass and access to protected routes', () => {
    cy.login('admin@admin.com', '123456')
    cy.url().should('eq', 'http://localhost:4173/')
    cy.contains('Rick Sanchez').click()
    cy.url().should('eq', 'http://localhost:4173/character/1')
    cy.contains('h1', 'Rick Sanchez')
  })
})
