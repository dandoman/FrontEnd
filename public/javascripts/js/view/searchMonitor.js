define([
	'backbone',
	'marionette',
	'../model/searchParam',
	'tpl!/javascripts/templates/search.tpl'
], function (Backbone, Marionette, SearchParam, search) {
	SearchMonitorItemView = Backbone.Marionette.ItemView.extend({
		template: search,

		events: {
			"keydown": "searchInput"
		},

		initialize: function() {
			console.log('Displaying: searchMonitor');
		},

		searchInput: function(e) {
			var code = e.keyCode || e.which;

			var userSearchInput = $("#searchBox").val();

	        if(code == 13) { // enter value
	        	var searchParamModel = new SearchParam.Model();

	        	var URI = this.getURI();

				searchParamModel.url = URI + "metrics?searchQuery=" + userSearchInput;

				searchParamModel.fetch({
				    success: function () {
				    	vent.trigger("showDropdownMonitor", searchParamModel);
				    }
				});
	        }
		},

		getURI: function() {
			return document.documentURI.split("/")[0];
		}
	});

	return SearchMonitorItemView;
	
});