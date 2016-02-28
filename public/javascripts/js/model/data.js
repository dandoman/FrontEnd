define([
	'backbone',
	'marionette'
], function (Backbone, Marionette) {
	DataModel = Backbone.Model.extend();

	DataCollection = Backbone.Collection.extend({
		model: DataModel
	});

	return {
		Model: DataModel,
		Collection: DataCollection
	}
});