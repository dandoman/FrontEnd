define([
	'backbone',
	'marionette'
], function (Backbone, Marionette) {
	MonitorModel = Backbone.Model.extend();

	MonitorCollection = Backbone.Collection.extend({
		model: MonitorModel
	});

	return {
		Model: MonitorModel,
		Collection: MonitorCollection
	}
});