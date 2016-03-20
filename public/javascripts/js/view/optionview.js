define([
	'backbone',
	'marionette',
	'highcharts',
	'bootstrap-datetimepicker',
	'moment-timezone',
	'jstz',
	'../model/searchParam',
	'../model/data',
	'tpl!/javascripts/templates/option.tpl'	
], function (Backbone, Marionette, highcarts, datatimepicker, moment, jstz, SearchParam, data, option) {
	OptionItemView = Backbone.Marionette.ItemView.extend({
		template: option,

		initialize: function() {
			//console.log(this.model.toJSON());
			this.currentUserParam = CurrentUserParam();
		},

		events: {
			"change #applicationOptions": "changeModel",
			"change #hostnameOptions": "changeModel",
			"change #operationOptions": "changeModel",
			"change #marketOptions": "changeModel",
			"change #metricOptions": "changeModel",
			"click #graphSubmit_button": "getData",
		},

		modelEvents: {
			"change": "rerender",
		},

		rerender: function() {
			this.render();
			this.onShow();
		},

		onShow: function() {
			this.fillDropdowns();
			this.highlight();

			var start = moment().subtract(1, 'M');
			var end = moment();

			$('.input-group.date.begin').datetimepicker({
	            defaultDate: start.format("YYYY-MM-DD HH:mm")
	        });

	        $('.input-group.date.end').datetimepicker({
	            defaultDate: end.format("YYYY-MM-DD HH:mm")
	        });
		},

		changeModel: function(e) {
			//var searchParamModel = new SearchParamModel();
			var searchParamModel = new SearchParam.Model();

	    	if (e.target.id === "applicationOptions") {    		
	    		this.currentUserParam.setApplicationName($("#applicationOptions option:selected").text());
	    	}

	    	if (e.target.id === "hostnameOptions") {
	    		this.currentUserParam.setHostname($("#hostnameOptions option:selected").text());
	    	}

	    	if (e.target.id === "operationOptions") {
	    		this.currentUserParam.setOperationName($("#operationOptions option:selected").text());
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

		fillDropdowns: function() {
			var applications = this.model.get("applicationNames");	
			var hostnames = this.model.get("hostnames");
			var operations = this.model.get("operationNames");
			var markets = this.model.get("marketplaces");
			var metrics = this.model.get("metricNames");

			for (var i=0; i<applications.length; i++) {
				if (applications[i] === "ALL") {
					$('#applicationOptions').append("<option selected='selected' value='" + applications[i] + "'>" + applications[i] + "</option>");
				}else{
					$('#applicationOptions').append("<option value='" + applications[i] + "'>" + applications[i] + "</option>");
				}
			}

			for (var i=0; i<hostnames.length; i++) {
				if (hostnames[i] === "ALL") {
					$('#hostnameOptions').append("<option selected='selected' value='" + hostnames[i] + "'>" + hostnames[i] + "</option>");
				}else{
					$('#hostnameOptions').append("<option value='" + hostnames[i] + "'>" + hostnames[i] + "</option");	
				}
			}

			for (var i=0; i<operations.length; i++) {
				if (operations[i] === "ALL") {
					$('#operationOptions').append("<option selected='selected' value='" + operations[i] + "'>" + operations[i] + "</option>");
				}else{
					$('#operationOptions').append("<option value='" + operations[i] + "'>" + operations[i] + "</option>");
				}
			}

			for (var i=0; i<markets.length; i++) {
				if (markets[i] === "ALL") {
					$('#marketOptions').append("<option selected='selected' value='" + markets[i] + "'>" + markets[i] + "</option>");	
				}else{
					$('#marketOptions').append("<option value='" + markets[i] + "'>" + markets[i] + "</option>");	
				}
			}

			for (var i=0; i<metrics.length; i++) {
				if (metrics[i] === "ALL") {
					$('#metricsOptions').append("<option selected='selected' value='" + metrics[i] + "'>" + metrics[i] + "</option>");
				}else{
					$('#metricOptions').append("<option value='" + metrics[i] + "'>" + metrics[i] + "</option>");
				}
				
			}
		},

		highlight: function() {

			var userSearchInput = $("#searchBox").val();

			if ($("#applicationOptions option[value='" + userSearchInput + "']").length > 0) {
				$("#applicationLabel").addClass("highlighted");
			}

			if ($("#hostnameOptions option[value='" + userSearchInput + "']").length > 0) {
				$("#hostnameLabel").addClass("highlighted");
			}

			if ($("#operationOptions option[value='" + userSearchInput + "']").length > 0) {
				$("#operationLabel").addClass("highlighted");
			}

			if ($("#marketOptions option[value='" + userSearchInput + "']").length > 0) {
				$("#marketLabel").addClass("highlighted");
			}

			if ($("#metricOptions option[value='" + userSearchInput + "']").length > 0) {
				$("#metricLabel").addClass("highlighted");
			}
		},

		getData: function() {	 	

		 	var self = this;

		 	//var dataCollection = new DataCollection();
		 	var dataCollection = new data.Collection();

		 	dataCollection.url = this.getURI();
		 	if (dataCollection.url) {
		 		dataCollection.fetch({
			 		success: function() {
			 			self.successCallback(dataCollection.toJSON());
			 		}
			 	});
		 	}else{
		 		alert("No valid keyword was detected");
		 	}
		 },

		 successCallback: function(data) {
		 	var startDate = moment($("#date_begin2").val());
		 	var endDate = moment($("#date_end2").val());

		 	var serializedData = this.serializeSerie(data, startDate, endDate);
		 	this.showGraph(serializedData, this.getStatOption());
		 },

		 serializeSerie: function(data, startDate, endDate) {

		 	var serie = [];

		 	for (var i=0; i<data.length; i++) {
		 		var dataDate = moment(data[i].timeStamp);		 		
		 		//if (dataDate.isBetween(startDate, endDate)) {
		 			serie.push([data[i].timeStamp, data[i][this.getStatOption()]]);
		 		//}
		 	}

		 	return serie;
		 },

		 showGraph: function(serie, title) {
		 	$('#graph').highcharts({
		        chart: {
		            type: 'line'
		        },
		        title: {
		            text: title
		        },
		        xAxis: {
		           	/*type: 'datetime',
				    minRange: 3600000,*/
				    labels: {
			            formatter: function() {
			                return moment(this.value).tz(Intl.DateTimeFormat().resolved.timeZone).format("YYYY-MM-DD HH:mm");
			            }
			        }
		        },
		        yAxis: {
		            
		        },
		        tooltip: {
		        	formatter: function() {
		        		return '<p><b>Date: ' + moment(this.x).tz(Intl.DateTimeFormat().resolved.timeZone).format("YYYY-MM-DD hh:mm A") +
		        		 '</b></p><p><b> Value: ' + this.y + '</b>';
		        	}
		        },
		        plotOptions: {
		            column: {
		                pointPadding: 0.2,
		                borderWidth: 0
		            }
		        },
		        series: [{data: serie}]
		    });
		 },

		 getURI: function() {

		 	var startTime = moment($("#date_begin2").val()).unix() * 1000;
		 	var finishTime = moment($("#date_end2").val()).unix() * 1000;

		 	var applicationName = $('#applicationOptions').find(":selected").text();
		 	var hostname = $('#hostnameOptions').find(":selected").text();
		 	var operation = $('#operationOptions').find(":selected").text();
		 	var marketplace = $('#marketOptions').find(":selected").text();
		 	var metricName = $('#metricOptions').find(":selected").text();

		 	if (applicationName === "" || hostname === "" || operation === "" || marketplace === "" || metricName === "") {
		 		return null;
		 	}

		 	var URI = document.documentURI.split("/")[0] + "/data";

		 	URI += "?applicationName=" + applicationName
		 		+ "&hostname=" + hostname
		 		+ "&operation=" + operation
		 		+ "&marketplace=" + marketplace
		 		+ "&metricName=" + metricName
		 		+ "&startTime=" + startTime
		 		+ "&finishTime=" + finishTime;

		 	console.log(URI);

			return URI;
		},

		getStatOption: function() {
			return $("#statsOptions").val();
		}
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
				marketplace = newMarketplace;
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

	return OptionItemView;
});