/**
 * Application definition, initializers and setup.
 */
define([
	'jquery',
	'underscore',
	'backbone',
	'handlebars',
	'marionette',
	'jquerycookie',
	'bootstrap',

	'app/events',
	'app/layout',

	'modules/dbi/sideNav',
	'modules/homeView/homeViewMod',
	'modules/dbi/staffCollectionView'
],
	function ($, _, Backbone, Handlebars, Marionette, Cookie, Bootstrap, appEvents, AppLayout, SideNav, homeViewMod, StaffCollection) {
		var App = new Marionette.Application();
		window.App = App;
		/**
			 * Define application modules here
			 */
		App.module("homeView", { moduleClass: homeViewMod });

		/**
			 * App paths and events
		 * TODO: move these to a config file.
			 */
		App.root = "/";
		App.Events = appEvents;


		/**
			 * Add the main region, it will hold the page layout and all sub-regions
			 */
		App.addRegions({
			appContent: '#appContentRegion',
			sideNav: '#sideNavRegion'
		});

		/**
			 * Set up an initialization chain for the application.
			 * ---------------------------------------------------
			 * 1) Initialize shared collections and models.
			 * 2) Initialize the layout of the application.
			 */
		App.addInitializer(function () {
			var self = this;
			self.initModelsAndCollections(function () {
				self.initAppLayout();

				// TODO: add Analytics
				// Analytics.initUser(App.Models.userSession);

				/**
				 * Start the history for navigation after initialization.
				 */
				Backbone.history.start({ root: App.root });
			});
		});

		App.initModelsAndCollections = function (callback) {
			console.info("App: Initializing models and collections");
			App.Models = {};
			App.Collections = {};

			/**
					 * Load the userSession object
					 */

			/**
			 * Load the app settings
			 */

			/**
					 * Load the collection of record types
					 */

			/**
					 * Fetch the collections
					 */

			// Temporary.
			if (typeof callback == "function") {
				callback();
			}
		};

		/**
		 * Utility methods shared by all modules
		 */
		App.renderStaffMembers = function (staffarray) {
			//console.warn(staffarray);
			$.each(staffarray, function () {
				// if an email or photoClass is specified, use it, otherwise concatenate first and last with a period or dash, respectively.
				this.email = this.email ? this.email.trim() : String(this.firstname + " " + this.lastname).replace(/'/g, "").replace(/ /g, ".") + "@sfgov.org";
				this.photoClass = this.photoClass ? this.photoClass : String(this.firstname + " " + this.lastname).replace(/'/g, "").replace(/ /g, "-").toLowerCase();
			});
			var collection = new Backbone.Collection(staffarray);
			var cview = new StaffCollection({
				collection: collection
			});
			return cview.render().$el;
		};

		/**
			 * Main initializing function sets up the basic layout and its regions
			 */
		App.initAppLayout = function () {
			App.sideNav.show(new SideNav({
			}));

			/**
					 * Inject the main layout into the main region of the page.
					 */
			App.layout = new AppLayout({ app: App });
			App.appContent.show(App.layout);
			App.layout.bindDocumentEvents();
			$('#logo').on('click', function (e) {
				e.stopPropagation();
				e.preventDefault();
				App.Router.navigate("", {
					trigger: true
				});
			});
		};
		window.App = App;
		return window.App;
	});