const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;
it('should return Hello Node babe', (done)=>{
    request(app)
        .get('/')
        .expect('Hello Node babe')
        .end(done);
});