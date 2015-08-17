var request = require('supertest');

describe('Error Views', function() {

    describe('Not Found', function() {
        var req;
        it('should get not found', function(done) {
            req = request.agent(sails.hooks.http.app);
            req
                .get('/notfound')
                .expect(404, done)
        });
        it('should login successfully', function(done) {
            req
                .post('/login')
                .type('form')
                .field('email', 'testacular@email.com')
                .field('password', 'testtest')
                .expect(200, done)
        });
        it('should get model not found', function(done) {
            req
                .get('/matter/-1')
                .expect(404, done)
        });
        it('should get model not found', function(done) {
            req
                .get('/matter/x')
                .expect(404, done)
        });
    });


})