GraphItemView = Backbone.Marionette.ItemView.extend({
	 template: "#graphSubmitButton_template",

	 events: {
	 	"click #graphSubmit_button": "getInfo",
	 },

	 getInfo: function() {	 	

	 	var self = this;

	 	var applicationName = $('#applicationOptions').find(":selected").text();
	 	var hostname = $('#hostnameOptions').find(":selected").text();
	 	var operation = $('#operationOptions').find(":selected").text();
	 	var marketplace = $('#marketOptions').find(":selected").text();
	 	var metricName = $('#metricOptions').find(":selected").text();

	 	var data = new DataModel();
	 	data.url = 'http://ec2-52-88-83-153.us-west-2.compute.amazonaws.com:8080/MetricsService/metric/search?applicationName=' + applicationName + 
	 				'&operation=' + operation + 
	 				'&marketplace=' + marketplace + 
	 				'&hostName=' + hostname + 
	 				'&metricName=' + metricName +
	 				'&customerId=342efwdfwef';

	 	data.fetch({
	 		success: function() {
	 			self.serializeSerie(data.toJSON()[0]);
	 		}
	 	});

	 },

	 serializeSerie: function(data) {
	 	var serie = [];

	 	console.log(data);

	 	serie = [data.p0, data.p50, data.p75, data.p90, data.p99, data.p100, data.p999, data.p9999];

	 	this.showGraph(serie);
	 },

	 showGraph: function(serie) {
	 	$('#graph').highcharts({
	        chart: {
	            type: 'column'
	        },
	        title: {
	            text: 'STUFF'
	        },
	        subtitle: {
	            text: 'STUFF SUBTITLE'
	        },
	        xAxis: {
	            categories: [
	                'p0',
	                'p50',
	                'p75',
	                'p90',
	                'p99',
	                'p100',
	                'p999',
	                'p9999'
	            ],
	        },
	        yAxis: {
	            min: 0,
	            title: {
	                text: "HEY"
	            }
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
	 }
});