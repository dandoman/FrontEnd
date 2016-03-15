// Depencendies managed by RequireJS
define([
	'backbone',
	'marionette',
	'homeApp',
	'view/search',
	'view/optionview',
	'view/sidebar',
	'view/dashboard',
	'view/monitor',
	'view/searchMonitor',
	'model/monitor',
	'view/optionMonitor',
	'view/monitorListView'
], function(Backbone, Marionette, HomeApp, SearchItemView, OptionItemView, SidebarItemView, DashBoardItemView, MonitorItemView, SearchMonitorItemView, monitor, OptionMonitorItemView, MonitorListView) {

	HomeApp.module('Home', function (Home, HomeApp, Backbone, Marionette, $, _){

		/*
		* Event manager for this module. Any events between views are piped to here, and controlled by the controller.
		*/
		vent = _.extend({}, Backbone.Events);

		/*
		* Home controller. Controls the interactions between the views and the changes between views.
		*/
		Home.Controller = Marionette.Controller.extend({

			/*
			* When controller is initilized, the sidebar and dashboard are shown
			*/
			start: function() {
				console.log("Home Controller start...");

				HomeApp.root = new HomeApp.HomeLayout.Root();		

				this.sidebar();
				this.dashboard();
			},

			/*
			* Create and render the sidebar
			*/
			sidebar: function() {
				var sideBarItemView = new SideBarItemView();
				HomeApp.root.showChildView('sidebar', sideBarItemView);
			},

			/*
			* Destroy any view other than the sidebar and create and render the dashboard
			*/
			dashboard: function() {
				$("#monitorList").empty();
				$("#dashboard").empty();
				$("#monitor").empty();

				HomeApp.root.addRegion("search", "#search");

				var dashboardItemView = new DashBoardItemView();
				HomeApp.root.showChildView('dashboard', dashboardItemView);

				var searchItemView = new SearchItemView();
				HomeApp.root.showChildView('search', searchItemView);
			},

			/**
			* Once a search parameter has been searched, display the options for displaying the graph
			* @param Backbone.model searchParamModel model containing all the options related to the searched input
			*/
			optionView: function(searchParamModel) {
				HomeApp.root.addRegion("optionv", "#optionv");

				var optionView = new OptionItemView({model: searchParamModel});
				HomeApp.root.showChildView('optionv', optionView);
			},

			/*
			* Create and render the page for creating monitors
			*/
			monitorCreate: function() {
				$("#monitorList").empty();
				$("#dashboard").empty();	
				$("#monitor").empty();

				HomeApp.root.addRegion("search", "#search");
				
				var monitorItemView = new MonitorItemView();
				HomeApp.root.showChildView('monitor', monitorItemView);

				var searchMonitorItemView = new SearchMonitorItemView();
				HomeApp.root.showChildView('search', searchMonitorItemView);	
			},

			/*
			* Once a keyword has been searched for creating monitors, create and render the options for creating the monitor
			* @param Backbone.model searchParamModel model containing all the options related to the searched input
			*/
			optionViewMonitor: function(searchParamModel) {
				HomeApp.root.addRegion("optionv", "#optionv");

				var optionMonitorItemView = new OptionMonitorItemView({model: searchParamModel});
				HomeApp.root.showChildView('optionv', optionMonitorItemView);
			},

			/*
			* Create and render the page for viewing the list of monitors
			*/
			monitorView: function() {
				$("#monitorList").empty();
				$("#dashboard").empty();
				$("#monitor").empty();

				var monitorCollection = new monitor.Collection();
				monitorCollection.url = document.documentURI.split("/")[0] + "/monitor";

				var self = this;

				monitorCollection.fetch({
					success: function() {
						self.monitorViewList(monitorCollection);
					}
				});

				var monitorItemView = new MonitorItemView();
				HomeApp.root.showChildView('monitor', monitorItemView);
			},

			/*
			* Callback on success for fetching the list of monitors and rendering it.
			* @param Backbone.collection monitorCollection List of all the monitors related to his user.
			*/
			monitorViewList: function(monitorCollection) {
				HomeApp.root.addRegion("monitorList", "#monitorList");
				var monitorCollectionView = new MonitorListView.CollectionView({collection: monitorCollection});
				HomeApp.root.showChildView('monitorList', monitorCollectionView);
			}
		}),

		vent.on("showDropdown", function(param) {
			HomeApp.controller.optionView(param);
		});

		vent.on("dashboardClick", function() {
			HomeApp.controller.dashboard();
		});

		vent.on("monitorCreateClick", function() {
			HomeApp.controller.monitorCreate();
		});

		vent.on("monitorViewClick", function() {
			HomeApp.controller.monitorView();
		});

		vent.on("showDropdownMonitor", function(param) {
			HomeApp.controller.optionViewMonitor(param);
		});
	});
	
	return HomeApp.Home;
});