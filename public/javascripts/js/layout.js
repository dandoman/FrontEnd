MyApp.module('Layout', function (Layout, MyApp, Backbone) {

    Layout.Root = Backbone.Marionette.LayoutView.extend({
        el: 'body',
        regions: {
            login: '#login',
            info: '#info',
            register: '#register',
           	optionv: '#optionv',
            graphButton: '#graphButton'
        }
    });
});


