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

		textbox: function() {
			$("#login").empty();
			$("#register").empty();

			var searchItemView = new SearchItemView();
			MyApp.root.showChildView('textbox', searchItemView);
		},

		main: function(model) {
			$("#login").empty();
			$("#register").empty();
			$("#optionv").empty();
			$("#graphButton").empty();
			$("#graph").empty();			

			


			/*var searchParamModel = new SearchParamModel();

			searchParamModel.url = document.documentURI + "metrics?someString=HELLO";

			searchParamModel.fetch({
			    success: function () {
			    	var optionView = new OptionItemView({model: searchParamModel});
					MyApp.root.showChildView('optionv', optionView);

					var graphButtonitemView = new GraphItemView();
					MyApp.root.showChildView('graphButton', graphButtonitemView);
			    }
			});*/
		}

		/*showGraphButton: function() {
			var graphButtonitemView = new GraphItemView();

			MyApp.root.showChildView('graphButton', graphButtonitemView);
		}*/
	}),

	vent.on("loggedIn", function(model) {
		//MyApp.controller.main(model);
		MyApp.controller.textbox();
		window.MyApp.router.navigate("main");
	});

	vent.on("register:click", function() {
		MyApp.controller.register();
		window.MyApp.router.navigate("register");
	});

});