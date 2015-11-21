MyApp.module('Main', function (Main, MyApp, Backbone, Marionette, $, _){

	vent = _.extend({}, Backbone.Events);

	Main.Router = Marionette.AppRouter.extend({
		appRoutes: {
			"": "home",
			"register": "register",
			"main": "main"			
		}
	});

	Main.Controller = Marionette.Controller.extend({
		start: function() {
			console.log("MyApp Controller start...");

			MyApp.root = new MyApp.Layout.Root();

			Backbone.history.start()
		},

		home: function() {			

			$("#login").empty();
			$("#register").empty();
			$("#optionv").empty();
			$("#graphButton").empty();
			$("#graph").empty();

			var loginView = new LoginItemView();
			MyApp.root.showChildView('login', loginView);
		},

		register: function() {

			$("#login").empty();
			$("#register").empty();
			$("#optionv").empty();
			$("#graphButton").empty();
			$("#graph").empty();

			var registerView = new RegisterItemView();
			MyApp.root.showChildView('register', registerView);
		},

		main: function(model) {
			$("#login").empty();
			$("#register").empty();
			$("#optionv").empty();
			$("#graphButton").empty();
			$("#graph").empty();

			var searchParamModel = new SearchParamModel();

			searchParamModel.url = "http://ec2-52-88-83-153.us-west-2.compute.amazonaws.com:8080/MetricsService/metric/searchParams?param=benchpress&customerId=342efwdfwef&startTime=0"

			searchParamModel.fetch({
			    success: function () {
			    	var optionView = new OptionItemView({model: searchParamModel});
					MyApp.root.showChildView('optionv', optionView);

					var graphButtonitemView = new GraphItemView();
					MyApp.root.showChildView('graphButton', graphButtonitemView);
			    }
			});
		}

		/*showGraphButton: function() {
			var graphButtonitemView = new GraphItemView();

			MyApp.root.showChildView('graphButton', graphButtonitemView);
		}*/
	}),

	vent.on("loggedIn", function(model) {
		MyApp.controller.main(model);
		window.MyApp.router.navigate("main");
	});

	vent.on("register:click", function() {
		MyApp.controller.register();
		window.MyApp.router.navigate("register");
	});

});