"use strict";
var request = require('request');

var URI = "http://localhost:3000/metrics/?searchQuery=benchpress&applicationName=DaveService";

var request = request.defaults({jar: true});

var j = request.jar();



var cookie = request.cookie('customerId=5a41733e-df01-404f-a36e-1053d73f2fd7');

j.setCookie(cookie);

describe('login', function () {
    it("should respond", function (done) {
        request({url: URI, jar: j}, function (error, response, body) {
            console.log(body);
            expect(body).toEqual("test");
            done();
        });
    });
});