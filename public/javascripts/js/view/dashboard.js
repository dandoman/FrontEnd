define([
	'backbone',
	'marionette',
	'tpl!/javascripts/templates/dashboard.tpl',	
], function(Backbone, Marionette, dashboardTemplate) {	
	DashboardItemView = Backbone.Marionette.ItemView.extend({
			 template: dashboardTemplate,

			 initialize: function() {
			 	
			 }
		});

	return DashboardItemView;
});