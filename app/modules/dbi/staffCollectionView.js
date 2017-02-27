/**
 * Manages regions that hold side navigation text and images
 */
define([
    'jquery', 'marionette','app/events', 'handlebars',
    'modules/dbi/staffMember'
], function ($, Marionette, appEvents, Handlebars, StaffMember) {
    return Marionette.CollectionView.extend({
		childView: StaffMember,
		className: 'staff-collection'
	});
});