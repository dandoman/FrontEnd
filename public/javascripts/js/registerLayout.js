define([
	'backbone',
	'marionette',
	'registerApp'
], function (Backbone, Marionette, RegisterApp) {	
	RegisterApp.module('RegisterLayout', function (RegisterLayout, RegisterApp, Backbone) {

	    RegisterLayout.Root = Backbone.Marionette.LayoutView.extend({
	        el: 'body',
	        regions: {
	            /*navBar: "#nav",*/
	            register: '#register'
	        }
	    });
	});

	return RegisterApp.RegisterLayout;
});