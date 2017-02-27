/**
 * Manages regions that hold side navigation text and images
 */
define([
    'jquery', 'marionette','app/events', 'handlebars',
    'text!templates/modules/dbi/staffMember.htm'
], function ($, Marionette, appEvents, Handlebars, templateHTML) {
    return Marionette.ItemView.extend({
		tagName: 'div',
		className: 'staff-info',
        initialize: function (options, moduleName, app) {
            var view = this;
            view.App = app;
            view.template = Handlebars.compile(templateHTML);
			view.options = options;

/* 			this.listenTo(this.model, "change", this.render); */
        },
        render: function () {
            var view = this;
            var html = view.template(view.options.model.toJSON());
            view.$el.html(html);
			return view;
        },
        events: {
        },
        /**
         * Custom methods
         */
    });

});