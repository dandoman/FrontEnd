LoginItemView = Backbone.Marionette.ItemView.extend({
	template: '#login_template',

	events: {
		"click #login_button": "loginClick",
		"click #register_button": "registerClick"
	},

	initialize: function() {
		
	},

	loginClick: function() {
		var account = $('#account').val();
		var password = $('#password').val();

		event.preventDefault();

		var documentName = document.documentURI.split("#")[0];
		documentName = documentName + "login";
	
	    //Send promise POST request
	    var options = {
	        url: documentName,
	        //TODO put this in separate models folder, maybe use dynamic loading
	        params: {
	            email: account,
	            password: password
	        }
	    };
	    this.promiseJSONPOST(options).then(function (fulfilled) {
	       console.log(fulfilled);
	       //window.location.replace(documentName);
	       vent.trigger("loggedIn", fulfilled);
	    }, function (rejected) {
	        console.log(rejected);
	    });		
	},

	promiseJSONPOST: function(opts) {
		return this.promisePOST(opts).then(JSON.parse);	
	},

	promisePOST: function(opts) {
		return new Promise(function (resolve, reject) {
	        var xhr = new XMLHttpRequest();
	        xhr.open("POST", opts.url);
	        xhr.onload = function () {
	            if (this.status >= 200 && this.status < 300) {
	                resolve(xhr.response);
	            } else {
	                reject({
	                    status: this.status,
	                    statusText: xhr.statusText
	                });
	            }
	        };
	        xhr.onerror = function () {
	            reject({
	                status: this.status,
	                statusText: xhr.statusText
	            });
	        };
	        if (opts.headers) {
	            Object.keys(opts.headers).forEach(function (key) {
	                xhr.setRequestHeader(key, opts.headers[key]);
	            });
	        }
	        var params = opts.params;
	        // We'll need to stringify if we've been given an object
	        // If we have a string, this is skipped.
	        if (params && typeof params === 'object') {
	            params = JSON.stringify(params);
	        }
	        xhr.send(params);
	    });
	},

	keyAction: function(e) {
        if (e.which == 13) {
            this.loginClick();
            event.preventDefault();
            return false;
        }
    },

    registerClick: function() {
    	vent.trigger("register:click");
    	//window.MyApp.router.navigate("register", {trigger: true});
    }
});