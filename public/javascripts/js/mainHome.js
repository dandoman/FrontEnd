// Filename: main.js

// Require.js allows us to configure shortcut alias
// There usage will become more apparent further along in the tutorial.
require.config({
  paths: {
    jquery: '../bower_components/jquery/dist/jquery',
    'jquery-ui': '../bower_components/jquery-ui/jquery-ui',
    underscore: '../bower_components/underscore/underscore',
    highcharts: '../bower_components/highstock/highstock',
    backbone: '../bower_components/backbone/backbone',
    marionette: '../bower_components/backbone.marionette/lib/core/backbone.marionette',
    'backbone.wreqr': '../bower_components/backbone.wreqr/lib/backbone.wreqr',
    'backbone.babysitter': '../bower_components/backbone.babysitter/lib/backbone.babysitter',
    moment: '../bower_components/moment/moment',
    'moment-timezone': '../bower_components/moment-timezone/builds/moment-timezone-with-data',
    jstz: '../bower_components/jstz/jstz',
    'bootstrap-datepicker': '../bower_components/bootstrap-datepicker/dist/js/bootstrap-datepicker',
    'bootstrap-datetimepicker': '../bower_components/eonasdan-bootstrap-datetimepicker/src/js/bootstrap-datetimepicker',
    bootstrap: '../bower_components/bootstrap/dist/js/bootstrap',
    tpl: '../bower_components/requirejs-tpl/tpl'
  },
  shim: {
  	underscore: {
  		exports: "_"
  	},
  	backbone: {
  		deps: ['underscore', 'jquery'],
  		exports: 'Backbone'
  	},
  	marionette: {
  		deps: ['backbone', 'backbone.wreqr'],
  		exports: 'Marionette'
  	},
  	'bootstrap-datetimepicker': {
  		deps: ['bootstrap-datepicker'],
  		exports: 'datetimepicker'
  	}
  }

});

require([
  'homeApp',
  'homeController',
  'homeLayout'
], function(HomeApp){
 	HomeApp.on('start', function() {
    console.log("Register App started");

    var Home = HomeApp.module('Home');

    HomeApp.controller = new Home.Controller();

    HomeApp.controller.start();

  }); 

 	HomeApp.start();
});