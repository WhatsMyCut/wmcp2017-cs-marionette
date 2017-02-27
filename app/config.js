/**
 * Stores all common configuration for the application.
 * External libraries, dependency related ordering, etc.
 */
require.config({
    urlArgs: "0.0.1",
    baseUrl: "/app",
    paths: {
        "jquery": "bower_components/jquery/dist/jquery.min",
        "jquerycookie": "bower_components/jquery.cookie/jquery.cookie",
        "underscore": "bower_components/underscore/underscore-min",
        "backbone": "bower_components/backbone/backbone-min",
        "backbone-relational": "bower_components/backbone-relational/backbone-relational",
        "marionette": "bower_components/marionette/lib/backbone.marionette-min",
        "handlebars": "bower_components/handlebars/handlebars.min",
        "bootstrap": "bower_components/bootstrap/dist/js/bootstrap.min",
        "json": "bower_components/json/json2",
        "async": "bower_components/async/lib/async",
        "text": "bower_components/requirejs-text/text",
        "i18n": "bower_components/i18n/i18n",
        "templates": "./templates",
        //"modules": "./modules"
        //"modernizr": "lib/modernizr-2.6.2.min",
        //"slick": "lib/slick.min",
        //"webfont": "https://ajax.googleapis.com/ajax/libs/webfont/1.5.3/webfont",
    },
    'shim': {
        'jquerycookie': {
            'deps': ['jquery']
        }, 
 		'bootstrap': {
			'deps': ['jquery']	
		},
        'underscore': {
            'exports': '_'
        },
        'backbone': {
            'deps': ['jquery', 'underscore'],
            'exports': 'Backbone'
        },
        'marionette': {
            'deps': ['jquery', 'underscore', 'backbone'],
            'exports': 'Marionette'
        },
		'handlebars': {
            'exports': 'Handlebars'
        } 
    }
});