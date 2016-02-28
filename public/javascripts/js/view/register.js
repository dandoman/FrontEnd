define([
	'backbone',
	'marionette',
	'tpl!/javascripts/templates/register.tpl'
], function (Backbone, Marionette, register) {
	RegisterItemView = Backbone.Marionette.ItemView.extend({
		template: register,

		events: {
			"click #register_button": "registerClick"
		},

		initialize: function() {
			console.log("Displaying: Registration");
		},

		registerClick: function() {

			var registration = this.getInfo();

			var documentName = document.documentURI;
			documentName = this.getURI() + "/register";

			console.log(registration);
		
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

		getURI: function () {
			return "http://" + document.documentURI.split("/")[2];
		},

		getInfo: function() {
			var userInfo = {};

			userInfo.organizationName = $("#organization_name").val();
			userInfo.organizationAddress = $("#organization_address").val();
			userInfo.contactName = $("#full_name").val();
			userInfo.password = $("#pwd").val();
			userInfo.contactEmail = $("#email").val();
			userInfo.contactPhoneNumber = $("#phone_number").val();
			userInfo.billingName = $("#billing_name").val();
			userInfo.billingAddress = $("#billing_address").val();
			userInfo.billingName = $("#billing_name").val();
			userInfo.expiryYear = $("#expiry").val().split("/")[1];
			userInfo.expiryMonth = $("#expiry").val().split("/")[0];
			userInfo.cvsCode = $("#cvs").val();
			userInfo.creditCardNumber = $("#credit_card").val();

			return userInfo;
		}
	});

	return RegisterItemView;
});