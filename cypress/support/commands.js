Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function () {
    cy.get('#firstName').type('Nathan')
    cy.get('#lastName').type('Santos')
    cy.get('#email').type('nathan@nathan.com')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button', 'Enviar').click()
})