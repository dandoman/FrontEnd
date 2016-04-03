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

	return RegisterApp;
});