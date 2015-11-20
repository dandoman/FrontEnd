var express = require('express');
var request = require('request');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    //res.render('index', {title: 'Test'}); // original tano
    res.sendfile('./public/javascripts/index.html'); // backbone nic
});

module.exports = router;