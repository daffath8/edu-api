describe('validate headers ', () => {
    it('Successfully validate headers content-type', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('headers').its('content-type')
            .should('include', 'application/json; charset=utf-8')
    })

    it('Validate response body has objects', () =>{
        cy.request('Get', 'https://pokeapi.co/api/v2/pokemon/ditto').then((response) => {
            expect(response.body).to.have.property('name')
            expect(response.body.ability).is.not.null
    })})
    it('Validate status code', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('status').should('equal', 200)
    })

    it('Successfully Validate content', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/bulbasaur').as('bulbasaur')
        cy.get('@bulbasaur').its('body').should('include', {name : "bulbasaur"})
    })

    it('Validate response body has another objects', () =>{
        cy.request('Get', 'https://pokeapi.co/api/v2/pokemon/ditto').then((response) => {
            expect(response.body).to.have.property('name')
            expect(response.body.name).to.eq('ditto')
    })})
    
})