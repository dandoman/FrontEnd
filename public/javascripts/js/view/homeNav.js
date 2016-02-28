define([
	'backbone',
	'marionette',
	'tpl!/javascripts/templates/homeNavBar.tpl'
], function(Backbone, Marionette, homeNavBar) {
	
	HomeNav = Backbone.Marionette.ItemView.extend({
		template: homeNavBar,

		initialize: function () {
			console.log("Diplaying: Home navigation");
		},

	});
	
	return HomeNav
});