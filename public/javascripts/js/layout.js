/*define([
	'backbone',
	'marionette',
	'app'
], function (Backbone, Marionette, MyApp) {
	MyApp.module('Layout', function (Layout, MyApp, Backbone) {

	    Layout.Root = Backbone.Marionette.LayoutView.extend({
	        el: 'body',
	        regions: {
	            navBar: "#header"
	        }
	    });
	});

	return MyApp.Layout;
});
*/

MyApp.module('Layout', function (Layout, MyApp, Backbone) {

    Layout.Root = Backbone.Marionette.LayoutView.extend({
        el: 'body',
        regions: {
            navBar: "#header"
        }
    });
});