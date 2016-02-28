define([
	'backbone',
	'marionette',
	'homeApp',
	'view/homeNav',
	'view/search',
	'view/optionview',
	'view/graph'
], function(Backbone, Marionette, HomeApp, HomeNav, SearchItemView, OptionItemView, GraphItemView) {

	HomeApp.module('Home', function (Home, HomeApp, Backbone, Marionette, $, _){

		vent = _.extend({}, Backbone.Events);

		/*Main.Router = Marionette.AppRouter.extend({
			appRoutes: {

			}
		});*/

		Home.Controller = Marionette.Controller.extend({
			start: function() {
				console.log("Home Controller start...");

				HomeApp.root = new HomeApp.HomeLayout.Root();

				//this.homeNav();
				this.textbox();
			},

			homeNav: function() {
				var homeNav = new HomeNav();
				HomeApp.root.showChildView('nav', homeNav);
			},

			textbox: function() {
				var searchItemView = new SearchItemView();
				HomeApp.root.showChildView('textbox', searchItemView);
			},

			main: function(searchParamModel) {
				var optionView = new OptionItemView({model: searchParamModel});
				HomeApp.root.showChildView('optionv', optionView);

				/*var graphButtonitemView = new GraphItemView();
				HomeApp.root.showChildView('graphButton', graphButtonitemView);*/
			}
		}),

		vent.on("showDropdown", function(param) {
			HomeApp.controller.main(param);
		});
	});
	
	return HomeApp.Home;
});