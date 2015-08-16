var request = require("supertest-as-promised");
var Promise = require("bluebird");
var fs = Promise.promisifyAll(require("fs"));

function binaryParser(res, callback) {
    res.setEncoding('binary');
    res.data = '';
    res.on('data', function (chunk) {
        res.data += chunk;
    });
    res.on('end', function () {
        callback(null, new Buffer(res.data, 'binary'));
    });
}

describe('DocumentController', function() {

    describe('#login()', function() {
        var req, matter_id, document_id;
        it('should login successfully', function(done) {
            req = request.agent(sails.hooks.http.app);
            req
                .post('/login')
                .type('form')
                .field('email', 'documentuploader@email.com')
                .field('password', 'testtest')
                .expect(200, done)
        });
        it('should create matter', function(done) {
            req
                .post('/matter')
                .send({matterType: 'New Requested Matter', text: "Will attach document"})
                .expect(201)
                .then(function(res){
                    matter_id = res.body.id;
                    done();
                });
        });
        it('should attach document to matter', function(done) {
            req
                .post('/document/uploadDocument')
                .field('matter', matter_id)
                .attach('document', 'test/fixtures/pdf-sample.pdf')
                .expect(201)
                .then(function(res){
                    document_id = res.body.id;
                    done();
                });
        });
        it('should download file and confirm', function(done) {
            req
                .get('/document/getDocument')
                .query({'id': document_id})
                .expect(200)
                .expect('Content-Type', 'application/pdf')
                .expect('Content-Disposition', 'attachment; filename="pdf-sample.pdf"')
                .parse(binaryParser)
                .then(function(res){
                    fs.readFileAsync('test/fixtures/pdf-sample.pdf', 'binary')
                    .then(function(f){
                        JSON.stringify(res.body).should.be.eql(JSON.stringify(Buffer(f)));
                        done();
                    });
                });
            });
        it('logs out and confirms file is inaccessible', function(done) {
            req
                .get('/logout')
                .expect(200)
                .then(function(){
                    return req
                    .get('/document/getDocument')
                    .query({'id': document_id})
                })
                .catch(function(res){
                    res.status.should.be.eql(403);
                    done();
                })
        });



    });
});