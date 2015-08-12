describe.only('UsersModel', function() {

    describe('#find()', function() {
        it('should have more than 0 entries', function(done) {
            User.find()
                .then(function(users) {
                    users.length.should.not.be.eql(0);
                    var admin = _.findWhere(users, {name: 'josh'});
                    admin.accountType.should.be.eql('admin');
                    admin.password.should.not.be.eql('test');
                    return admin.verifyPassword('test').should.eventually.be.true;
                })
                .then(function(){
                    return done();
                })
                .catch(done)

        });
    });

});