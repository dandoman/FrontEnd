define([
	'backbone',
	'marionette',
], function () {

	SearchParamModel = Backbone.Model.extend();

	SearchParamCollection = Backbone.Collection.extend({
		model: SearchParamModel,

		initialize: function() {
			
		}
	});

	return {
		Model: SearchParamModel,
		Collection: SearchParamCollection
	};

});