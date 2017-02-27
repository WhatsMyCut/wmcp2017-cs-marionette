/**
 * Defines app routes
 */
define(['backbone', 'marionette', 'app/controller'],
    function (Backbone, Marionette, appController) {
        var AppRouter = Marionette.AppRouter.extend({
            appRoutes: {
                /* Home View Module */
                "": "homeView",
                "/": "homeView",
                "director": "directorsOffice",
            }
        });
        return new AppRouter({ controller: appController });
    });