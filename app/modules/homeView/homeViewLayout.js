/**
 * Manages regions that hold home view text and images
 */
define([
    'jquery', 'marionette', 'handlebars', 'app/events',
    'text!templates/modules/homeView/homeViewLayout.htm',
	'modules/homeView/landingPage',
	'modules/homeView/directorsOffice',
	'modules/homeView/buildingInspectionCommission',
	'modules/homeView/resources'
],
function ($, Marionette, Handlebars, appEvents, templateHTML, LandingPage, DirectorsOffice, BICPage, ResourcesPage) {
    return Marionette.View.extend({
        template: Handlebars.compile(templateHTML),
		tagName: "div",
		id: "homeViewLayout",
		regions: {
			landingRegion: "#homeViewRegion"
        },
        initialize: function () {
            var layout = this;
            layout.module = layout.options.module;
            if (!layout.module) {
                console.error("homeViewLayout requires a module instance.");
            }
			appEvents.on("app:homeViewMod:stopping", function () {
				//layout.removeContent();
			});
        },
        render: function () {
            var layout = this;
            var html = layout.template();
            layout.$el.html(html);
			return layout;
        },
        onRender: function () {
			console.info("rendering...");
            var layout = this;
            layout.delegateEvents();
        },
        events: {
            // TODO: add events here
        },
		/**
		 * Custom Methods
		 */
		showLandingPage: function () {
			console.info("showLandingPage");
			var layout =  this;
			console.warn(layout.$el);
			var landingPage = new LandingPage({});
			$("#homeViewRegion", layout.$el).fadeOut(250, function() {
				$("#homeViewRegion", layout.$el).html(landingPage.$el).fadeIn(250);
			});
		},
		
		showDirectorsOfficeView: function () {
			console.warn("showDirectorsOfficeView");
			var layout = this;
			var directorsOffice = new DirectorsOffice({});
			$("#homeViewRegion", layout.$el).fadeOut(250, function() {
				$("#homeViewRegion", layout.$el).empty().append(directorsOffice.$el).fadeIn(250);
			});
		},
		
		showBicLandingPage: function () {
			var layout =  this;
			var bicLandingPage = new BICPage({});
			bicLandingPage.render();
			$("#homeViewRegion", layout.$el).fadeOut(250, function() {
				$("#homeViewRegion", layout.$el).empty().append(bicLandingPage.$el).fadeIn(250);
			});
		},
		
		showResourcesPage: function () {
			var layout =  this;
			var resourcesPage = new ResourcesPage({});
			resourcesPage.render();
			$("#homeViewRegion", layout.$el).fadeOut(250, function() {
				$("#homeViewRegion", layout.$el).empty().append(resourcesPage.$el).fadeIn(250);
			});
		},

		removeContent: function () {
			console.warn("removeContent");
			var layout = this;
			$("#homeViewRegion", layout.$el).fadeOut(250);
		}
    });
});