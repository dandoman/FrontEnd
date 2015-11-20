HostnameOptionItemView = Backbone.Marionette.ItemView.extend({	

	template: "#hostnameOption_template",

	initialize: function(options) {
		this.selection = options.selection;
		console.log(this.selection);
	},

	onShow: function() {
		for (var i=0; i<this.selection.length; i++) {
			$('#hostnameOptions').append("<option>" + this.selection[i] + "</option");
		}
	}
});