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

		vent = _.extend({}, Backbone.Events);

		Home.Controller = Marionette.Controller.extend({
			start: function() {
				console.log("Home Controller start...");

				HomeApp.root = new HomeApp.HomeLayout.Root();		

				this.sidebar();
				this.dashboard();
			},

			sidebar: function() {
				var sideBarItemView = new SideBarItemView();
				HomeApp.root.showChildView('sidebar', sideBarItemView);
			},

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

			optionView: function(searchParamModel) {
				HomeApp.root.addRegion("optionv", "#optionv");

				var optionView = new OptionItemView({model: searchParamModel});
				HomeApp.root.showChildView('optionv', optionView);
			},

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

			optionViewMonitor: function(searchParamModel) {
				HomeApp.root.addRegion("optionv", "#optionv");

				var optionMonitorItemView = new OptionMonitorItemView({model: searchParamModel});
				HomeApp.root.showChildView('optionv', optionMonitorItemView);
			},

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