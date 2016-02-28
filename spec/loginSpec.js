"use strict";
var request = require('request');

var URI = "http://localhost:3000/login";

describe('login', function () {
    it("should respond", function (done) {
        //TODO Fix or figure out format
        //This is probably wrong format
        var options = {
            url: "http://localhost:3000/login",
            data: {
            email: "davide.cannucci@gmail.com",
            password: "12345"
            }
        };
        request.post(JSON.stringify(options), function (error, response, body) {
            console.log(response);
            expect(response).toEqual("test");
            done();
        });
    });
});