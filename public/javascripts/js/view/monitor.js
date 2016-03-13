define([
	'backbone',
	'marionette',
	'../model/searchParam',
	'tpl!/javascripts/templates/monitor.tpl',	
], function (Backbone, Marionette, SearchParam, monitorTemplate) {	
	MonitorItemView = Backbone.Marionette.ItemView.extend({
			template: monitorTemplate,

			initialize: function() {
				
			},

		});

	return MonitorItemView;
});