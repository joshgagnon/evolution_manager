var request = require('supertest');

describe('AuthController', function() {

    describe('#login()', function() {
        var req;
        it('should fail authorization', function(done) {
            req = request.agent(sails.hooks.http.app);
            req
                .get('/matter')
                .expect(403, done)
        });
        it('should fail login', function(done) {
            req
                .post('/login')
                .type('form')
                .field('email', 'testacular@email.com')
                .field('password', 'badpassword')
                .expect(401, done)
        });
        it('should fail login', function(done) {
            req
                .post('/login')
                .type('form')
                .field('email', 'bademail@email.com')
                .field('password', 'badpassword')
                .expect(401, done)
        });
        it('should get login page', function(done) {
            req
                .get('/')
                .expect(200, done)
        });
        it('should login successfully', function(done) {
            req
                .post('/login')
                .type('form')
                .field('email', 'testacular@email.com')
                .field('password', 'testtest')
                .expect(200, done)
        });
        it('should navigate to protected page', function(done) {
            req
                .get('/home')
                .expect(200, done)
        });
        it('should logout', function(done) {
            req
                .get('/logout')
                .expect(200, done)
        });
        it('should fail authorization', function(done) {
            req
                .get('/matter')
                .expect(403, done)
        });
    });
});