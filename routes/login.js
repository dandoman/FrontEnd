/**
 * Created by dinamix on 8/30/15.
 */
"use strict";
var express = require('express');
var request = require('request');
var router = express.Router();

var springURI = "http://ec2-52-88-83-153.us-west-2.compute.amazonaws.com:8080/MetricsService/customer/login";
//var metricURI = "http://ec2-52-88-83-153.us-west-2.compute.amazonaws.com:8080/MetricsService/metric/searchParams?param=benchpress&customerId=342efwdfwef&startTime=0";
var postData = "";

router.get('/', function (req, res, next) {
    res.render('login', req.cookies);
});

router.post('/', function (req, res, next) {
    req.on('data', function (data) {
        postData = JSON.parse(data);
        //TODO make this post request be an async promise
        //TODO maybe use a different library or promisify this itself
        request.post({url: springURI, json: postData}, function (error, response, body) {
            console.log('in request');
            //TODO check for validated data or not and res.send appropriately
            if (!error) {
                //TODO make own redirection models
                console.log("message is : " + response.body.message);
                //TODO MAYBE SHOULD ONLY SEND BACK MESSAGE OR ERRORMESSAGE ON INVALID LOGINS
                if (response.body.message === "Invalid email or password") {
                    res.send({invalid: "invalid"});
                } else {
                    console.log('not in error' + JSON.stringify(response.body));
                    res.send(response.body);
                }
            } else {
                console.log('in error');
                console.log('in error ' + response.statusCode);
                console.log(error);
            }
        });
    });
});

module.exports = router;