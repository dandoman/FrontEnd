OperationOptionItemView = Backbone.Marionette.ItemView.extend({
	template: "#operationOption_template",

	initialize: function(options) {
		this.selection = options.selection;
		console.log(this.selection);
	},

	onShow: function() {
		for (var i=0; i<this.selection.length; i++) {
			$('#operationOptions').append("<option>" + this.selection[i] + "</option");
		}
	}
});