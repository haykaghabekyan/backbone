// Author: Thomas Davis <thomasalwyndavis@gmail.com>
// Filename: main.js

// Require.js allows us to configure shortcut alias
// Their usage will become more apparent futher along in the tutorial.

require.config({
    baseUrl: '',
    paths: {
        'jquery': 'libs/jquery/jquery-2.1.1',
        'underscore': 'libs/underscore/underscore-1.6.0',
        'backbone': 'libs/backbone/backbone-1.1.2',
        'marionette': 'libs/marionette/backbone.marionette-2.0.2',
//        'backbone.wreqr': 'libs/wreqr/backbone.wreqr-1.3.1',
//        'backbone.babysitter': 'libs/babysitter/backbone.babysitter-0.1.4',
        'handlebars': 'libs/handlebars/handlebars-v1.3.0'
    },
    shim: {
        'handlebars': {
            exports: 'Handlebars'
        }
    }
});

require(['starter', 'underscore', 'backbone', 'marionette', 'handlebars', 'jquery', 'patch_file'], function (app, _, Backbone, Marionette, Handlebars, $) {
    'use strict';

    app.vent.on('ModulesLoaded', function () {
        //console.log('on: ModulesLoaded');
        app.start({
            cacheBuster: '_=' + new Date().getTime()
        });
    });
});