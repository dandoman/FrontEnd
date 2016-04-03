define([
	'backbone',
	'marionette',
	'tpl!/javascripts/templates/profile.tpl',	
], function(Backbone, Marionette, profileTemplate) {	
	ProfileItemView = Backbone.Marionette.ItemView.extend({
			template: profileTemplate,

			events: {
				"click #save_profile": "saveClick",
			},

			initialize: function() {
				console.log("profile");
			},

			saveClick: function() {
				var profile = new Backbone.Model({
			   		id: this.model.get("id")
			 	});

			 	if ($("#pwd").val() != $("#pwd2").val()) {
			 		alert("Passwords do not match!");
			 	}else{
			 		profile.set({
				 		organizationName: $('#organization_name').val(),
				 		organizationAddress: $('#organization_address').val(),
				 		contactName: $('#full_name').val(),
				 		contactPhoneNumber: $('#phone_number').val(),
				 		contactEmail: $('#email').val(),
				 		password: $('#pwd').val(),
				 		//accountType: $('#type').val(),
				 		billingName: $('#billing_name').val(),
				 		billingAddress: $('#billing_address').val()
				 	});

				 	if ($('#type').val()) {
				 		profile.set({
				 			accountType: $('#type').val()
				 		})
				 	}

				 	profile.url = document.documentURI.split("/")[0] + "/customer/";
			 		profile.save();
			 	}
			}

		});

	return ProfileItemView;
});