SearchItemView = Backbone.Marionette.ItemView.extend({
	template: "#searchInput_template",

	events: {
		"keydown": "searchInput"
	},

	initialize: function() {
		
	},

	searchInput: function(e) {
		var code = e.keyCode || e.which;

		var userSearchInput = $("#searchBox").val();

        if(code == 13) { // enter value
        	console.log("searching: " + userSearchInput);
        	var searchParamModel = new SearchParamModel();

        	var URL = document.documentURI.split("/")[0];

			searchParamModel.url = URL + "metrics?searchQuery=" + userSearchInput;

			searchParamModel.fetch({
			    success: function () {
			    	console.log(searchParamModel.toJSON());

			    	// create dropdown view

			    }
			});
        }
	}
});