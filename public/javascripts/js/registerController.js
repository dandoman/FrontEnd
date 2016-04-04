define([
	'backbone',
	'marionette',
	'registerApp',
	'view/register'
], function (Backbone, Marionette, RegisterApp, RegisterItemView) {	
	RegisterApp.module('Register', function (Register, RegisterApp, Backbone, Marionette, $, _){

		vent = _.extend({}, Backbone.Events);

		Register.Controller = Marionette.Controller.extend({
			start: function() {
				console.log("Register Controller start...");

				RegisterApp.root = new RegisterApp.RegisterLayout.Root();

				this.register();
			},

			register: function() {

				var registerView = new RegisterItemView();
				RegisterApp.root.showChildView('register', registerView);
			}
		});
	});

	return RegisterApp.Register;
});