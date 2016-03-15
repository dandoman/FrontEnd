define([
	'backbone',
	'marionette',
	'tpl!/javascripts/templates/monitorList.tpl'
], function (Backbone, Marionette, monitorListTemplate) {
	MonitorItemView = Backbone.Marionette.ItemView.extend({
		template: monitorListTemplate,

		events: {
			"click #delete": "delete",
		},

		initialize: function() {
			
		},

		delete: function() {
			this.model.url = this.getURI() + '/monitor/' + this.model.get("id");
			console.log(this.model.toJSON());
			this.model.destroy();
		},

		getURI: function () {
			return "http://" + document.documentURI.split("/")[2];
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