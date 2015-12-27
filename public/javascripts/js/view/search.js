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

        	var URI = this.getURI();

			searchParamModel.url = URI + "metrics?searchQuery=" + userSearchInput;

			searchParamModel.fetch({
			    success: function () {
			    	//console.log(searchParamModel.toJSON());

			    	// create dropdown view
			    	vent.trigger("showDropdown", searchParamModel);
			    }
			});
        }
	},

	getURI: function() {
		return document.documentURI.split("/")[0];
	}
});