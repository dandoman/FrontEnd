define([
	'backbone',
	'marionette',
	'../model/searchParam',
	'tpl!/javascripts/templates/search.tpl'
], function (Backbone, Marionette, SearchParam, search) {
	SearchItemView = Backbone.Marionette.ItemView.extend({
		template: search,

		events: {
			"keydown": "searchInput"
		},

		initialize: function() {
			console.log('Displaying: search');
		},

		searchInput: function(e) {
			var code = e.keyCode || e.which;

			var userSearchInput = $("#searchBox").val();

	        if(code == 13) {
	        	var searchParamModel = new SearchParam.Model();

	        	var URI = this.getURI();

				searchParamModel.url = URI + "metrics?searchQuery=" + userSearchInput;

				searchParamModel.fetch({
				    success: function () {
				    	vent.trigger("showDropdown", searchParamModel);
				    }
				});
	        }
		},

		getURI: function() {
			return document.documentURI.split("/")[0];
		}
	});

	return SearchItemView;
	
});