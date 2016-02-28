define([
	'backbone',
	'marionette',
	'highcharts',
	'moment',
	'../model/data',
	'tpl!/javascripts/templates/graphSubmitButton.tpl',	
], function(Backbone, Marionette, highcharts, moment, data, graphSubmitButton) {	
	GraphItemView = Backbone.Marionette.ItemView.extend({
		 template: graphSubmitButton,

		 events: {
		 	"click #graphSubmit_button": "getData",
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

		 	console.log(startDate.format("YYYY-MM-DD"));
		 	console.log(endDate.format("YYYY-MM-DD"));

		 	for (var i=0; i<data.length; i++) {
		 		var dataDate = moment(data[i].timeStamp);
		 		console.log(dataDate.format("YYYY-MM-DD"));
		 		if (dataDate.isBetween(startDate, endDate)) {
		 			console.log("HELLO");
		 			serie.push([data[i].timeStamp, data[i][this.getStatOption()]]);
		 		}
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
		           	type: 'datetime',
				    minRange: 3600000
		        },
		        yAxis: {
		            
		        },
		        tooltip: {
		         	  
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
		 		+ "&metricName=" + metricName;

		 	console.log(URI);

			return URI;
		},

		getStatOption: function() {
			return $("#statsOptions").val();
		}
	});

	return GraphItemView
});