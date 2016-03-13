define([
	'backbone',
	'marionette',
	'tpl!/javascripts/templates/frontpage.tpl',
], function (Backbone, Marionette, frontpage) {
	FrontPage = Backbone.Marionette.ItemView.extend({
		template: frontpage,
		
		initialize: function() {
			console.log("Displaying: Frontpage");
		},

		events: {
			"click #login_button": "loginClick"
		},

		onShow: function() {
			

			/*skrollrMenu.init(s, {
				animate: true,
				easing: "sqrt",
				updateUrl: false,
			});*/
		}
	});

	return FrontPage;
});