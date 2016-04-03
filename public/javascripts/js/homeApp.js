define([
	'backbone',
	'marionette',
], function (Backbone, Marionette) {
	var HomeApp = Backbone.Marionette.Application.extend({
		initialize: function() {
			console.log("Home App initialization OK");
		}
	});

	var HomeApp = new HomeApp();

	return HomeApp;
});