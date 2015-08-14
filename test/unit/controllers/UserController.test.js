var request = require("supertest-as-promised");
var Promise = require("bluebird");


var invalidUsers = [{name: 'x', email: 'asdf'},
    {name: 'x', email: 'asdf@email.com', password: '1234'},
    {name: 'x', email: 'testacular@email.com', password: '123456789', accountType: 'client'},
    {name: 'x', email: 'asadf@email.com', password: '123456789', accountType: 'client'}]


var validUser = {name: 'x', email: 'asdf@email.com', accountType: 'client', password: '123456789'};

describe('UserController', function() {

    describe('#login()', function() {
        var req, id;
        it('should fail to create user unauthenticated', function(done) {
            req = request.agent(sails.hooks.http.app);
            req
                .post('/user')
                .send(invalidUsers[0])
                .expect(403, done)
        });
        it('should login successfully', function(done) {
            req
                .post('/login')
                .type('form')
                .field('email', 'testacular@email.com')
                .field('password', 'test')
                .expect(200, done)
        });
        it('should fail to create user authenticated as client', function(done) {
            req
                .post('/user')
                .set(invalidUsers[0])
                .expect(403, done)
        });
        it('should logout', function(done) {
            req
                .get('/logout')
                .expect(200, done)
        });
        it('should login successfully as staff', function(done) {
            req
                .post('/login')
                .type('form')
                .field('email', 'teststaffcreate@email.com')
                .field('password', 'test')
                .expect(200, done)
        });
        it('should fail to create invalid users authenticated as staff', function(done) {
            Promise.all(invalidUsers.map(function(user){
                req
                    .post('/user')
                    .send(user)
                    .expect(400)
                }))
            .then(function(){
                done();
            });
        });
        it('should succeed to create valid user authenticated as staff', function(done) {
            req
                .post('/user')
                .send(validUser)
                .expect(201)
                .then(function(res){
                    id = res.body.id;
                    done();
                });
        });
        it('should succeed to update valid users authenticated as staff', function(done) {
            req
                .put('/user/'+id)
                .send({name: 'xx'})
                .expect(200)
                .then(function(res){
                    done();
                });
        });
        it('should confirm update', function(done) {
            req
                .get('/user/'+id)
                .expect(200)
                .then(function(res){
                    res.body.name.should.be.eql('xx');

                    done();
                });
        });
        it('should not have password', function(done) {
            req
                .get('/user/'+id)
                .expect(200)
                .then(function(res){
                    (res.body.password === undefined).should.be.ok;
                    done();
                });
        })
    });

});