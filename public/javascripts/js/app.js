
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