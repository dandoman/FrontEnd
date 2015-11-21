OptionItemView = Backbone.Marionette.ItemView.extend({
	template: option_template,

	initialize: function() {
		console.log(this.model.toJSON());
	},

	onShow: function() {
		var applications = this.model.get("applicationNames");	
		var hostnames = this.model.get("hostnames");
		var operations = this.model.get("operationNames");
		var markets = this.model.get("marketplaces");
		var metrics = this.model.get("metricNames");

		for (var i=0; i<applications.length; i++) {
			$('#applicationOptions').append("<option>" + applications[i] + "</option");
		}

		for (var i=0; i<hostnames.length; i++) {
			$('#hostnameOptions').append("<option>" + hostnames[i] + "</option");
		}

		for (var i=0; i<operations.length; i++) {
			$('#operationOptions').append("<option>" + operations[i] + "</option");
		}

		for (var i=0; i<markets.length; i++) {
			$('#marketOptions').append("<option>" + markets[i] + "</option");
		}

		for (var i=0; i<metrics.length; i++) {
			$('#metricOptions').append("<option>" + metrics[i] + "</option");
		}
	}
});