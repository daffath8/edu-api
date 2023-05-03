describe('Create New User', () =>{
    it('Successfully create new user', () => {
        var user = {
            "name" : "Eduwork",
            "job ": "Education"
        };
        cy.request('Post', 'https://reqres.in/api/users', user).then((response) => {
            expect(response.status).equal(201)
            expect(response.body).to.have.property('id')
            expect(response.body.name).equal('Eduwork')
            expect(response.body.job).is.not.null
            
        });
        
    });
})