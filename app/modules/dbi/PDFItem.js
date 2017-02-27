/**
 * Manages regions that hold side navigation text and images
 */
define([
    'jquery', 'backbone','app/events', 'handlebars',
    'text!templates/modules/dbi/PDFItem.htm'
], function ($, Backbone, appEvents, Handlebars, templateHTML) {
    return Backbone.ItemView.extend({
		tagName: 'li',
		className: 'link-item',
        initialize: function (options, moduleName, app) {
            var view = this;
            view.App = app;
            view.template = Handlebars.compile(templateHTML);
			view.options = options;
        },
        render: function () {
            var view = this;
            var html = view.template(view.options.toJson());
            view.$el.html(html);
        },
        events: {
        },
        /**
         * Custom methods
         */
    });

});