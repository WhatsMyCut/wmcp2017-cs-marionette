/**
 * Manages regions that hold side navigation text and images
 */
define([
    'jquery', 'backbone','app/events', 'handlebars', 'jquerycookie',
    'text!templates/modules/dbi/sideNav.htm'
], function ($, Backbone, appEvents, Handlebars, Cookie, templateHTML) {

    return Backbone.View.extend({
		tagName: 'div',
		className: '',
		id: 'nav-container',
        initialize: function (options, moduleName, app) {
            var view = this;
            view.App = app;
            view.template = Handlebars.compile(templateHTML);
			appEvents.on("app:navigateTo", function (data) {
                view.highlightButton(data.step);
            }, view);
        },
        render: function () {
            var view = this;
            var html = view.template();
            view.$el.html(html);
        },

        events: {
        },
        /**
         * Custom methods
         */
		highlightButton: function (step) {
			var view = this;
			$("#sidenav a, #sidenav button").removeClass('active');
			step = (step === 'home') ? '' : step;
			//console.info(step);
			var link = $("a[href='#" + step + "']", view.$el);
			var parentMenu = link.parent();
			if ((parentMenu.attr('id') !== "sidenav") && step !== '') {
				var submenu = link.parentsUntil("#sidenav");
				var div = submenu[submenu.length-1];
				$("button", div).addClass('active');
			}
			link.addClass('active');
		}
    });

});
