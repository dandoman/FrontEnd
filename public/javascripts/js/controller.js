MyApp.module('Main', function (Main, MyApp, Backbone, Marionette, $, _){

	Main.Router = Marionette.AppRouter.extend({
		appRoutes: {
			"": "home",
			"register": "register",
			"data": "data"
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
			$("#graph").empty();

			var loginView = new LoginItemView();
			MyApp.root.showChildView('login', loginView);
		},

		register: function() {

			$("#login").empty();
			$("#register").empty();
			$("#graph").empty();

			var registerView = new RegisterItemView();
			MyApp.root.showChildView('register', registerView);
		},

		data: function() {
			$("#login").empty();
			$("#register").empty();
			$("#graph").empty();
		}

		/*showLogin: function() {
			console.log("LOGIN");
			this.loginView = new LoginItemView();
			MyApp.root.showChildView('login', this.loginView);
		},

		showInfo: function(loginModel) {
			this.loginView.remove();

			var infoView = new InfoItemView();
			MyApp.root.showChildView('info', infoView);
		},

		showRegister: function() {
			this.loginView.remove();

			this.registerView = new RegisterItemView();
			MyApp.root.showChildView('register', this.registerView);	
		},

		showOptions: function() {
			this.registerView.remove();

			var searchParamModel = new SearchParamModel();

			searchParamModel.url = "http://ec2-52-88-83-153.us-west-2.compute.amazonaws.com:8080/MetricsService/metric/searchParams?param=benchpress&customerId=342efwdfwef&startTime=0"

			searchParamModel.fetch({
			    success: function () {
			    	console.log(searchParamModel.toJSON());

			    	var applicationOption = searchParamModel.get("applicationNames");
			    	var hostnameOption = searchParamModel.get("hostnames");
			    	var operationOption = searchParamModel.get("operationNames");
			    	var marketOption = searchParamModel.get("marketplaces");
			    	var metricOption = searchParamModel.get("metricNames");

			    	var applicationOptionItemView = new ApplicationOptionItemView({selection: applicationOption});
			    	var hostnameOptionItemView = new HostnameOptionItemView({selection: hostnameOption});
			    	var operationOptionItemView = new OperationOptionItemView({selection: operationOption});
			    	var marketOptionItemView = new MarketOptionItemView({selection: marketOption});
			    	var metricOptionItemView = new MetricOptionItemView({selection: metricOption});


			    	MyApp.root.showChildView('applicationOption', applicationOptionItemView);
			    	MyApp.root.showChildView('hostnameOption', hostnameOptionItemView);
			    	MyApp.root.showChildView('operationOption', operationOptionItemView);
			    	MyApp.root.showChildView('marketOption', marketOptionItemView);
			    	MyApp.root.showChildView('metricOption', metricOptionItemView);
			    }
			});
		},

		showGraphButton: function() {
			var graphButtonitemView = new GraphItemView();

			MyApp.root.showChildView('graphButton', graphButtonitemView);
		}*/
	});
});