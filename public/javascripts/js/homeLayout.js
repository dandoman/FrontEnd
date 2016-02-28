define([
	'backbone',
	'marionette',
	'homeApp'
], function (Backbone, Marionette, HomeApp) {
	HomeApp.module('HomeLayout', function (HomeLayout, HomeApp, Backbone) {

	    HomeLayout.Root = Backbone.Marionette.LayoutView.extend({
	        el: 'body',
	        regions: {
	            optionv: '#optionv',
	            graphButton: '#graphButton',
	            textbox: '#search'
	        }
	    });
	});

	return HomeApp.HomeLayout;
});

