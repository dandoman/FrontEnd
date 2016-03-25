define([
	'backbone',
	'marionette',
	'tpl!/javascripts/templates/topbar.tpl',	
], function(Backbone, Marionette, topbarTemplate) {	
	TopBarItemView = Backbone.Marionette.ItemView.extend({
			template: topbarTemplate,

			events: {
				"click #logout": "logoutClick",
				"click #profile": "profileClick"
			},

			initialize: function() {
				console.log("topbar");
			},

			onRender: function () {
			    this.$el = this.$el.children();
			    this.$el.unwrap();
			    this.setElement(this.$el);
		  	},

		  	logoutClick: function() {
				// crude delete cookie
				document.cookie = "customerId=;expires=Thu, 01 Jan 1970 00:00:01 GMT;";

				window.location.href = document.location.origin;
		  	},

		  	profileClick: function() {
		  		vent.trigger("profileClick");	
		  	}

		});

	return TopBarItemView;
});