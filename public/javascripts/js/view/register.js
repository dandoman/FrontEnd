RegisterItemView = Backbone.Marionette.ItemView.extend({
	template: '#register_template',

	events: {
		"click #register_button": "registerClick"
	},

	initialize: function() {
		
	},

	registerClick: function() {
		window.MyApp.router.navigate("", {trigger: true});
	}

});