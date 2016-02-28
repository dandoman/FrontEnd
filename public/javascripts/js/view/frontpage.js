define([
	'backbone',
	'marionette',
	'tpl!/javascripts/templates/frontpage.tpl',
	'skrollr',
	//'skrollrMenu'
], function (Backbone, Marionette, frontpage, skrollr) {
	FrontPage = Backbone.Marionette.ItemView.extend({
		template: frontpage,
		
		initialize: function() {
			console.log("Displaying: Frontpage");
		},

		events: {
			"click #login_button": "loginClick"
		},

		onShow: function() {
			var s = skrollr.init();

			/*skrollrMenu.init(s, {
				animate: true,
				easing: "sqrt",
				updateUrl: false,
			});*/
		}
	});

	return FrontPage;
});