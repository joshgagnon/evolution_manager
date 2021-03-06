var request = require("supertest-as-promised");
var Promise = require("bluebird");


describe('Matter Controller', function() {

    describe('Basic Matter Behaviour', function() {
        var req, matter_id;
        it('should login successfully', function(done) {
            req = request.agent(sails.hooks.http.app);
            req
                .post('/login')
                .type('form')
                .field('email', 'matterclient@email.com')
                .field('password', 'testtest')
                .expect(200, done)
        });
        it('should retrieve empty list of matters', function(done) {
            req
                .get('/matter')
                .expect(200)
                .expect(function(res){
                    res.body.length.should.be.eql(0);
                })
                .then(function(){
                    done();
                });
        });
        it('should create new pending matter', function(done) {
            req
                .post('/matter')
                .send({matterType: 'New Requested Matter', text: "I'm hungry"})
                .expect(201)
                .expect(function(res){
                    res.body.should.be.ok;
                    res.body.pending.should.be.ok;
                })
                .then(function(){
                    return req.get('/matter')
                })
                .then(function(res){
                    res.body.length.should.be.eql(1);
                    matter_id = res.body[0].id;
                    return req.get('/matter/'+ matter_id)
                })
                .then(function(res){
                    res.status.should.be.eql(200);
                    done();
                })
        });
        it('should logout', function(done) {
            req
                .get('/logout')
                .expect(200, done);
        });
        it('should log in as new user, not see matter', function(done) {
            req
                .post('/login')
                .type('form')
                .field('email', 'testaculartortion@email.com')
                .field('password', 'testtest')
                .expect(200)
                .then(function(){
                    return req.get('/matter');
                })
                .then(function(res){
                    res.body.length.should.be.eql(0);
                    return req.get('/matter/'+matter_id)
                })
                .catch(function(res){
                    res.status.should.be.eql(403);
                    done();
                });
        });
    });
});