require.config({
    baseUrl: '../app',
    urlArgs: 'cb=' + Math.random(),

    deps: ['backbone.marionette'],

    paths: {
        spec: '../test/spec', // lives in the test directory

        jquery: '../app/bower_components/jquery/jquery',
        backbone: '../app/bower_components/backbone-amd/backbone',
        underscore: '../app/bower_components/underscore-amd/underscore',

        /* backbone plugins */
        'backbone.syphon': '../app/bower_components/backbone.syphon/lib/backbone.syphon.min',
        'backbone.iobind': '../app/bower_components/backbone.iobind/dist/backbone.iobind.min',

        /* alias all marionette libs */
        'backbone.marionette': '../app/bower_components/marionette/lib/backbone.marionette.min',
        'backbone.wreqr': '../app/bower_components/backbone.wreqr/lib/backbone.wreqr.min', 
        'backbone.babysitter': '../app/bower_components/backbone.babysitter/lib/backbone.babysitter.min',

        /* alias the bootstrap js lib */
        bootstrap: '../app/scripts/vendor/bootstrap',
        //'bootstrap-button': 'vendor/bootstrap-button',

        /* Alias text.js for template loading and shortcut the templates dir to tmpl */
        text: '../app/bower_components/requirejs-text/text',
        tmpl: "../app/templates",

        /* handlebars from the require handlerbars plugin below */
        handlebars: '../app/bower_components/handlebars/lib/handlebars.min',

        /* require handlebars plugin - Alex Sexton */
        i18nprecompile: '../app/bower_components/i8n/i18n',
        json2: '../app/bower_components/json/json2',
    },

    hbs: {
        disableI18n: true
    }
});

/* require test suite */
require([
    'jquery',
    'spec/testSuite'
],
function( $, testSuite ) {

    'use strict';

    /* on dom ready require all specs and run */
    $( function() {
        require(testSuite.specs, function() {

            if (window.mochaPhantomJS) {
                mochaPhantomJS.run();
            }
            else {
                mocha.run();
            }
            
        });
    });
});
  