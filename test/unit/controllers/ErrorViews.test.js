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
        it('should get model not found', function(done) {
            req = request.agent(sails.hooks.http.app);
            req
                .get('/matters/-1')
                .expect(404, done)
        });
    });


})