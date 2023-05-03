describe('Get User List', () => {
    it('Verify the users list will displayed', () =>{
        cy.request({
            method: "Get",
            url: "https://reqres.in/api/users",
        }).as("users")
        cy.get('@users').its('status').should('equal', 200)
    });
});