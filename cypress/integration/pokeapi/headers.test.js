describe('validate headers ', () => {
    
    it('Successfully validate headers content-type', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('headers').its('content-type')
            .should('include', 'application/json; charset=utf-8')
    })

    it('Validate response body has objects', () =>{
        cy.request('Get', 'https://pokeapi.co/api/v2/pokemon/ditto').then((response) => {
            expect(response.status).equal(200)
            expect(response.body).to.have.property('name')
            //expect(response.body).to.have.property('url')
            expect(response.body.ability).is.not.null
        });
    });
})