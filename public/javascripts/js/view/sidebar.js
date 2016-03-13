define([
	'backbone',
	'marionette',
	'tpl!/javascripts/templates/sidebar.tpl',	
], function(Backbone, Marionette, sidebarTemplate) {	
	SideBarItemView = Backbone.Marionette.ItemView.extend({
			template: sidebarTemplate,

			events: {
				"click #dashboardButton": "dashboardClick",
				"click #monitorCreate": "monitorCreateClick",
				"click #monitorView": "monitorViewClick"
			},

			initialize: function() {
				console.log("sidebar");
			},

			dashboardClick: function() {
				$("#dashboardButton").parent().addClass("active");
				vent.trigger("dashboardClick");
			},

			monitorCreateClick: function() {
				$("#dashboardCreate").parent().removeClass("active");
				vent.trigger("monitorCreateClick");
			},

			monitorViewClick: function() {
				$("#dashboardCreate").parent().removeClass("active");
				vent.trigger("monitorViewClick");
			}
		});

	return SideBarItemView;
});