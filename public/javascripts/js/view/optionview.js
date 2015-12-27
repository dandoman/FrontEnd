OptionItemView = Backbone.Marionette.ItemView.extend({
	template: option_template,

	initialize: function() {
		console.log(this.model.toJSON());
		this.currentUserParam = CurrentUserParam();
	},

	events: {
		"change #applicationOptions": "changeModel",
		"change #hostnameOptions": "changeModel",
		"change #operationOptions": "changeModel",
		"change #marketOptions": "changeModel",
		"change #metricOptions": "changeModel",
	},

	modelEvents: {
		"change": "rerender",
	},

	rerender: function() {
		this.render();
		this.onShow();
	},

	onShow: function() {
		var applications = this.model.get("applicationNames");	
		var hostnames = this.model.get("hostnames");
		var operations = this.model.get("operationNames");
		var markets = this.model.get("marketplaces");
		var metrics = this.model.get("metricNames");

		for (var i=0; i<applications.length; i++) {
			if (applications[i] === "ALL") {
				$('#applicationOptions').append("<option selected='selected'>" + applications[i] + "</option");
			}else{
				$('#applicationOptions').append("<option>" + applications[i] + "</option");
			}
		}

		for (var i=0; i<hostnames.length; i++) {
			if (hostnames[i] === "ALL") {
				$('#hostnameOptions').append("<option selected='selected'>" + hostnames[i] + "</option");
			}else{
				$('#hostnameOptions').append("<option>" + hostnames[i] + "</option");	
			}
		}

		for (var i=0; i<operations.length; i++) {
			if (operations[i] === "ALL") {
				$('#operationOptions').append("<option selected='selected'>" + operations[i] + "</option");
			}else{
				$('#operationOptions').append("<option>" + operations[i] + "</option");
			}
		}

		for (var i=0; i<markets.length; i++) {
			if (markets[i] === "ALL") {
				$('#marketOptions').append("<option selected='selected'>" + markets[i] + "</option");	
			}else{
				$('#marketOptions').append("<option>" + markets[i] + "</option");	
			}
		}

		for (var i=0; i<metrics.length; i++) {
			if (metrics[i] === "ALL") {
				$('#metricsOptions').append("<option selected='selected'>" + metrics[i] + "</option");
			}else{
				$('#metricOptions').append("<option>" + metrics[i] + "</option");
			}
			
		}
	},

	changeModel: function(e) {
		var searchParamModel = new SearchParamModel();

    	if (e.target.id === "applicationOptions") {    		
    		this.currentUserParam.setApplicationName($("#applicationOptions option:selected").text());
    	}

    	if (e.target.id === "hostnameOptions") {
    		this.currentUserParam.setHostname($("#hostnameOptions option:selected").text());
    	}

    	if (e.target.id === "operationOptions") {
    		this.currentUserParam.setOperationName($("#oeprationOptions option:selected").text());
    	}

    	if (e.target.id === "marketOptions") {
    		this.currentUserParam.setMarketplace($("#marketOptions option:selected").text());
    	}

    	if (e.target.id === "metricOptions") {
    		this.currentUserParam.setMetric($("#metricOptions option:selected").text());
    	}

    	searchParamModel.url = this.currentUserParam.getURI();

    	console.log(searchParamModel.url);

		var self = this;

		searchParamModel.fetch({
		    success: function () {
		    	self.model.set({applicationNames: searchParamModel.get("applicationNames")});
		    	self.model.set({hostnames: searchParamModel.get("hostnames")});
		    	self.model.set({operationNames: searchParamModel.get("operationNames")}); 
		    	self.model.set({marketplaces: searchParamModel.get("marketplaces")});
		    	self.model.set({metricNames: searchParamModel.get("metricNames")});
		    }
		});
	},

	getURI: function() {
		return document.documentURI.split("/")[0];
	},
});

function CurrentUserParam() {
	var applicationName;
	var hostname;
	var operationName;
	var marketplace;
	var metricName;

	var userSearchInput = $("#searchBox").val();
	var URI = document.documentURI.split("/")[0] + "metrics?searchQuery=" + userSearchInput;

	return {
		setApplicationName: function(newApplicationName) {
			applicationName = newApplicationName;
			URI += "&applicationName=" + applicationName;
		},

		setHostname: function(newHostname) {
			hostname = newHostname;
			URI += "&hostName=" + hostname;
		},

		setOperationName: function(newOperationName) {
			operationName = newOperationName;
			URI += "&operation=" + operationName;
		},

		setMarketplace: function(newMarketplace) {
			marketplace = newMarketplacel;
			URI += "&marketplace=" + marketplace;		
		},

		setMetric: function(newMetricName) {
			metricName = newMetricName;
			URI += "&metricName=" + metricName;
		},

		getURI: function() {
			return URI;
		}
	}
}