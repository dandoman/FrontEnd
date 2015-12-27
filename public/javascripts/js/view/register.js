RegisterItemView = Backbone.Marionette.ItemView.extend({
	template: '#register_template',

	events: {
		"click #register_button": "registerClick"
	},

	initialize: function() {
		
	},

	registerClick: function() {
		var registration = {
			organizationName: "McGill",
			organizationAddress: "245 Sher",
			contactName: "Nicolas Truong",
			contactPhoneNumber: "745-5784",
			contactEmail: "gerg@gmail.com",
			password: "12345",
			billingName: "Nicolas Truong",
			billingAddress: "245 Sher",
			expiryMonth: "3",
			expiryYear: "2016",
			cvsCode: "500",
			creditCardNumber: "1234123412341234"
		}

		event.preventDefault();

		var documentName = document.documentURI;
		documentName = documentName.split("#")[0] + "register";


		console.log(documentName);
	
	    //Send promise POST request
	    var options = {
	        url: documentName,
	        //TODO put this in separate models folder, maybe use dynamic loading
	        params: registration
	    };
	    this.promiseJSONPOST(options).then(function (fulfilled) {
	       console.log(fulfilled);
	       //window.location.replace(documentName);
	       //vent.trigger("loggedIn", fulfilled);
	    }, function (rejected) {
	        console.log(rejected);
	    });

		window.MyApp.router.navigate("", {trigger: true});
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


});