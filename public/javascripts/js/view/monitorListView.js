define([
	'backbone',
	'marionette',
	'tpl!/javascripts/templates/monitorList.tpl'
], function (Backbone, Marionette, monitorListTemplate) {
	MonitorItemView = Backbone.Marionette.ItemView.extend({
		template: monitorListTemplate,

		initialize: function() {
			
		}
	});

	MonitorCollectionView = Backbone.Marionette.CollectionView.extend({

		childView: MonitorItemView,
		tagName: "div",

		regions: {
			childViewRegion: "#monitorList"
		},

		initialize: function() {
			
		},

	});

	return {
		ItemView: MonitorItemView,
		CollectionView: MonitorCollectionView
	};
});