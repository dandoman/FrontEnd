// Filename: main.js

// Require.js allows us to configure shortcut alias
// There usage will become more apparent further along in the tutorial.
require.config({
  paths: {
    jquery: '../bower_components/jquery/dist/jquery',
    underscore: '../bower_components/underscore/underscore',
    backbone: '../bower_components/backbone/backbone',
    marionette: '../bower_components/backbone.marionette/lib/core/backbone.marionette',
    'backbone.wreqr': '../bower_components/backbone.wreqr/lib/backbone.wreqr',
    'backbone.babysitter': '../bower_components/backbone.babysitter/lib/backbone.babysitter',
    bootstrap: '../bower_components/bootstrap/dist/js/bootstrap',
    tpl: '../bower_components/requirejs-tpl/tpl',
    scrollgress: '../bower_components/scrollgress/src/scrollgress',
    main: '../assets/js/main',
    util: '../assets/js/util'    
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
  	bootstrap_datetimepicker: {
  		deps: ['bootstrap-datepicker'],
  		exports: 'datetimepicker'
  	}
  }

});

require([
	'app',
  'controller',
  'layout',
  'jquery',
  'scrollgress',
  'main'
], function(MyApp){

  MyApp.on('start', function() {
    console.log("App started");

    //var main = MyApp.module('Main');

    //MyApp.controller = new main.Controller();
    //MyApp.controller = new MyApp.Main.Controller();

    //MyApp.controller.start();
  });

 	//MyApp.start();

});