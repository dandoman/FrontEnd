MarketOptionItemView = Backbone.Marionette.ItemView.extend({	

	template: "#marketOption_template",

	initialize: function(options) {
		this.selection = options.selection;
		console.log(this.selection);
	},

	onShow: function() {
		for (var i=0; i<this.selection.length; i++) {
			$('#marketOptions').append("<option>" + this.selection[i] + "</option");
		}
	}
});