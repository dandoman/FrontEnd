define([
	'backbone',
	'marionette',
	'homeApp'
], function (Backbone, Marionette, HomeApp) {
	HomeApp.module('HomeLayout', function (HomeLayout, HomeApp, Backbone) {

	    HomeLayout.Root = Backbone.Marionette.LayoutView.extend({
	        el: 'body',
	        regions: {
	        	sidebar: '#sidebar',
	        	dashboard: '#dashboard',
	        	monitor: '#monitor',
	        	topbar: '#topbar',
	        	profile: '#profileView'
	        }
	    });
	});

	return HomeApp.HomeLayout;
});

