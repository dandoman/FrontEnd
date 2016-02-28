define([
	'backbone',
	'marionette'
], function (Backbone, Marionette) {
	var HomeApp = Backbone.Marionette.Application.extend({
		initialize: function() {
			console.log("Home App initialization OK");
		}
	});

	var HomeApp = new HomeApp();

	// HomeApp.on('start', function() {
	// 	console.log("Register App started");

	// 	var Home = HomeApp.module('Home');

	// 	HomeApp.controller = new Home.Controller();
	// 	//MyApp.router = new register.Router({controller: MyApp.controller});

	// 	HomeApp.controller.start();

	// });	

	/*$(document).ready(function(){
	    HomeApp.start();
	});*/

	return HomeApp;
});