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

		/*var loginModel = new Backbone.Model({
			email: account,
			password: password
		});

		var loginJSON = {
			email: account,
			password: password
		};

		loginModel.url = document.documentURI + "login";

		loginModel.save({email: account, password: password}, {
			success: function() {
				console.log("Successfully Sent");
			},
			error: function(model, error) {
				console.log(model.toJSON());
				console.log(error.responseText);
			}
		});*/

		event.preventDefault();

		var documentName = document.documentURI + "login";
	
	    //Send promise POST request
	    var options = {
	        url: documentName,
	        //TODO put this in separate models folder, maybe use dynamic loading
	        params: {
	            email: account,
	            password: password
	        }
	    };
	    promiseJSONPOST(options).then(function (fulfilled) {
	        console.log(fulfilled);
	        window.location.replace(documentName);
	    }, function (rejected) {
	        console.log(rejected);
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
    	window.MyApp.router.navigate("register", {trigger: true});
    }
});

function promiseJSONPOST(opts) {
    return promisePOST(opts).then(JSON.parse);
}

function promisePOST(opts) {
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
}