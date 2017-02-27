/**
 * Home View Module:
 * =======================
 * This module contains all the logic required
 * for DBI Intranet home page.
 */
define([
    'jquery', 'marionette', 
    'app/events',
    'modules/homeView/homeViewLayout'
],
function ($, Marionette, appEvents, HomeViewLayout) {
    return Marionette.Module.extend({
        initialize: function (options, moduleName, app) {
            var mod = this;
            mod.App = app;
            mod.startWithParent = false;
			mod.moduleStarted = false;
            mod.layout = new HomeViewLayout({module: mod});
/* 			appEvents.on("app:navigateTo:landingPage", function () {
                mod.startNewList();
            }, mod); */
			mod.on("before:stop", function(){
				// do stuff before the module is stopped
				//$("#appContentRegion").fadeOut(250);
				mod.layout.removeContent();
			});
        },
        onStart: function (options) {
            console.info("homeViewMod: starting module...");
            var mod = this;
			mod.moduleStarted = true;
            appEvents.trigger("app:homeViewMod:started");
            console.info("homeViewMod: started.");
        },
		onBeforeStop: function () {
            console.info("homeViewMod: stopping module...");
            var mod = this;
            appEvents.trigger("app:homeViewMod:stopping");
		},
        onStop: function (options) {
            var mod = this;
            // stop any sub modules here
			mod.moduleStarted = false;
            appEvents.trigger("app:homeViewMod:stopped");
            console.info("homeViewMod: stopped.");
        }
    });
});