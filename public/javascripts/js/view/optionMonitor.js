define([
	'backbone',
	'marionette',
	'bootstrap-datetimepicker',
	'moment',
	'../model/searchParam',
	'../model/data',
	'tpl!/javascripts/templates/monitorOption.tpl'	
], function (Backbone, Marionette, datatimepicker, moment, SearchParam, data, monitorOption) {
	OptionMonitorItemView = Backbone.Marionette.ItemView.extend({
		template: monitorOption,

		initialize: function() {
			this.currentUserParam = CurrentUserParam();
		},

		events: {
			"change #applicationOptions": "changeModel",
			"change #hostnameOptions": "changeModel",
			"change #operationOptions": "changeModel",
			"change #marketOptions": "changeModel",
			"change #metricOptions": "changeModel",
			"click #createMonitor": "createMonitor"
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

			$('.input-group.date.begin').datetimepicker({
	            format: "YYYY-MM-DD HH:mm",
	            stepping: 15,
	            sideBySide: true,
	            defaultDate: moment().subtract(1, 'M').startOf('d').format('YYYY-MM-DD HH:mm')
	        });

	        $('.input-group.date.end').datetimepicker({
	            format: "YYYY-MM-DD HH:mm",
	            stepping: 15,
	            sideBySide: true,
	            defaultDate: moment().subtract(1, 'd').endOf('day').subtract(15, 'm').format('YYYY-MM-DD HH:mm')
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

		getURI: function () {
			return "http://" + document.documentURI.split("/")[2];
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

		createMonitor: function() {
			
			var params = this.getInfo();
			var url = this.getURI() + "/monitor";

			var options = {
				url: url,
				params: params
			}

			this.promiseJSONPOST(options).then(function (fulfilled) {
				if (fulfilled.message) {
					alert(fulfilled.message);
				}else{
					vent.trigger("monitorViewClick");	
				}
		    }, function (rejected) {
		        console.log(rejected);
		    });
		},

		promiseJSONPOST: function(opts) {
			return this.promisePOST(opts).then(JSON.parse);	
		},

		promisePOST: function(opts) {
			return new Promise(function (resolve, reject) {
		        var xhr = new XMLHttpRequest();
		        xhr.open("POST", opts.url);
		        xhr.onload = function () {
		            if (this.status >= 200 && this.status < 300) {
		                resolve(xhr.response);
		            } else {
		                reject({
		                    status: this.status,
		                    statusText: xhr.statusText
		                });
		            }
		        };
		        xhr.onerror = function () {
		            reject({
		                status: this.status,
		                statusText: xhr.statusText
		            });
		        };
		        if (opts.headers) {
		            Object.keys(opts.headers).forEach(function (key) {
		                xhr.setRequestHeader(key, opts.headers[key]);
		            });
		        }
		        var params = opts.params;
		        // We'll need to stringify if we've been given an object
		        // If we have a string, this is skipped.
		        if (params && typeof params === 'object') {
		            params = JSON.stringify(params);
		        }
		        xhr.send(params);
		    });
		},

		getInfo: function() {
			var monitorInfo = {};

			monitorInfo.customerId = this.getCookie("customerId");
			monitorInfo.applicationName = $("#applicationOptions option:selected").text();
			monitorInfo.hostName = $("#hostnameOptions option:selected").text();
			monitorInfo.operation = $("#operationOptions option:selected").text();
			monitorInfo.market = $("#marketOptions option:selected").text();
			monitorInfo.metricName = $("#metricOptions option:selected").text();
			monitorInfo.type = $("#type option:selected").val();
			monitorInfo.threshold = $("#threshold").val();
			monitorInfo.counts = $("#counts").val();
			monitorInfo.less = $("#less option:selected").val();
			monitorInfo.emailRecipient = $("#email").val();
			monitorInfo.description = $("#textarea").val();

			return monitorInfo;
		},

		getCookie: function(name) {
		  	var value = "; " + document.cookie;
		  	var parts = value.split("; " + name + "=");
		  	if (parts.length == 2) return parts.pop().split(";").shift();
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

	return OptionMonitorItemView;
});