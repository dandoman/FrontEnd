define([
	'backbone',
	'marionette'
], function (Backbone, Marionette) {
	var RegisterApp = Backbone.Marionette.Application.extend({
		initialize: function() {
			console.log("Registration App initialization OK");
		}
	});

	var RegisterApp = new RegisterApp();

	// RegisterApp.on('start', function() {
	// 	console.log("Register App started");

	// 	var Register = RegisterApp.module('Register');

	// 	RegisterApp.controller = new Register.Controller();
	// 	//MyApp.router = new register.Router({controller: MyApp.controller});

	// 	RegisterApp.controller.start();

	// });	

	// $(document).ready(function(){
	//     RegisterApp.start();
	// });

	return RegisterApp;
});