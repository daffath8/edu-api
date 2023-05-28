/// <reference types= "cypress" />

describe('Test APi login The Internet Herokuapp', () => {
    it('Successfully login via url', () =>{
        cy.loginViaApi(),
        cy.get('h3').should('include.text', 'Basic Auth'),
        cy.get('p').should('include.text', 'Congratulations! You must have the proper credentials.')
    })
})