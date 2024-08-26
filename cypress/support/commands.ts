/// <reference types="cypress" />
Cypress.Commands.add('login', (email: string, password: string) => {
  cy.visit('/login')
  cy.get('#email').type(email)
  cy.get('#password').type(password)
  cy.get('button').click()
})

export {}
