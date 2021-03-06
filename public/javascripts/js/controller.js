MyApp.module('Main', function (Main, MyApp, Backbone, Marionette, $, _){

	vent = _.extend({}, Backbone.Events);

	Main.Controller = Marionette.Controller.extend({
		start: function() {
			console.log("MyApp Controller start...");

			MyApp.root = new MyApp.Layout.Root();

			Backbone.history.start()

			this.loginNav();
		},

		loginNav: function() {
			var nav = new LoginNav();
			MyApp.root.showChildView('navBar', nav);
		},
	})
});