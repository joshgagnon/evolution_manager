

describe('Users Model', function() {
    describe('Find an Admin, verify Password', function() {
        var admin;
        it('should have more than 0 entries', function(done) {
            User.find()
                .then(function(users) {
                    users.length.should.not.be.eql(0);
                    admin = _.findWhere(users, {name: 'test-admin'});
                    //admin.should.be.an('object');
                })
                .then(done)
            });
        it('should have encoded password', function(done){
            admin.accountType.should.be.eql('admin');
            admin.password.should.not.be.eql('testtest');
            admin.verifyPassword('testtest').should.be.eventually.fulfilled
                .then(function(){done()})
        })
        it('should reject bad password', function(done){
            admin.verifyPassword('wrong password').should.be.rejected
                .then(function(){done()})
        });
        it('change password works', function(done){
            admin.changePassword('newtesty').should.be.eventually.fulfilled
                .then(function(_admin){
                    admin = _admin;
                    admin.password.should.not.be.eql('newtesty');
                    return admin.verifyPassword('newtesty').should.be.eventually.fulfilled
                })
                .then(function(){done()})
        });
        it('prevents leakage', function(done){
            (admin.toJSON().password === undefined).should.be.ok;
            done();
        });
        it('change name works', function(done){
            admin.name = 'testy';
            admin.save()
                .then(function(_admin){
                    admin = _admin;
                    admin.name.should.be.eql('testy');
                    done();
                });
        });

    });

});