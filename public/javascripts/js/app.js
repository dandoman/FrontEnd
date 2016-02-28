/*define([
	'backbone',
	'marionette'
], function (Backbone, Marionette) {	
	var App = Backbone.Marionette.Application.extend({
		initialize: function() {
			console.log("App initialization OK");
		}
	});

	var MyApp = new App();

	// MyApp.on('start', function() {
	// 	console.log("App started");

	// 	//var main = MyApp.module('Main');

	// 	//MyApp.controller = new main.Controller();
	// 	MyApp.controller = new MyApp.Main.Controller();
	// 	MyApp.router = new main.Router({controller: MyApp.controller});

	// 	MyApp.controller.start();

	// });

	// $(document).ready(function(){
	//     MyApp.start();
	// });

	return MyApp;
});*/


var App = Backbone.Marionette.Application.extend({
	initialize: function() {
		console.log("App initialization OK");
	}
});

var MyApp = new App();

MyApp.on('start', function() {
	console.log("App started");

	var main = MyApp.module('Main');

	MyApp.controller = new main.Controller();	

	MyApp.controller.start();

});	

$(document).ready(function(){
    MyApp.start();
});