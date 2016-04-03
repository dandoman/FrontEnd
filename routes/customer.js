var express = require('express');
var request = require('request');
var router = express.Router();

router.get('/', function (req, res, next) {
    //postData = JSON.parse(data);
    //TODO make this post request be an async promise
    //TODO maybe use a different library or promisify this itself

    var springURI = getURI(req);
    console.log(springURI);

    request.get({url: springURI}, function (error, response, body) {

        console.log('in request');   
        
        //TODO check for validated data or not and res.send appropriately
        if (!error) {
            //TODO make own redirection models
            console.log("message is : " + response.body.message);
            //TODO MAYBE SHOULD ONLY SEND BACK MESSAGE OR ERRORMESSAGE ON INVALID LOGINS
            console.log('not in error : ' + JSON.stringify(response.body));
            res.send(response.body);
        } else {
            console.log('in error');
            console.log('in error ' + response.statusCode);
            console.log(error);
        }
    });    
});

router.put('/', function(req, res, next) {

    var body = req.body;

    var url = "http://ec2-52-88-83-153.us-west-2.compute.amazonaws.com:8080/MetricsService/customer/" + req.body.id;

    request.put({url: url, json: req.body}, function(error, response, body) {
        console.log(response);
        res.send(response.body);
    });
});

function getURI(req) {

    var springURI = "http://ec2-52-88-83-153.us-west-2.compute.amazonaws.com:8080/MetricsService/customer?";

    springURI += "customerId=" + req.cookies.customerId 

    return springURI;
};

module.exports = router;