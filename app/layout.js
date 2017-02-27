/**
 * Main layout view controller
 */
define([
		'jquery', 'backbone', 'marionette', 'handlebars',
		'text!templates/app/layout.htm',
		'app/events',
		'app/regionTypes/modalRegion'
	],
	function($, Backbone, Marionette, Handlebars, layoutHTML, appEvents, ModalRegion) {
		return Marionette.LayoutView.extend({
			template: Handlebars.compile(layoutHTML),
			tagName: "div",
			id: "mainContentContainer",

			/**
			 * Define app regions
			 */
			regions: {
				mainContentRegion: "#mainContentRegion",
				modalRegion: {
					selector: "#modalRegion",
					regionType: ModalRegion
				}
			},

			initialize: function() {
				var layout = this;
				layout.App = layout.options.app;

				//appEvents.on("app:homeViewMod:started", layout.showHomeView, layout);
			},

			/**
			 * Page events
			 */
			events: {},

			/**
			 * Custom methods
			 */
			bindDocumentEvents: function() {
				return true;
			},
			showHomeView: function() {
				console.warn("showHomeView!");
			}
		});
	});