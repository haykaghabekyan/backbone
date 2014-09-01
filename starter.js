/**
 * (C) COPYRIGHT APP FACTORY 2014
 */
define(function (require) {
    "use strict";

    var App = require('app');
    var ModuleLoader = require('app/module_loader');

    var App = new App();

    var moduleLoader = new ModuleLoader(App);
    moduleLoader.loadModules();

    App.on('initialize:before', function(options) {
        options.anotherThing = true; // Add more data to your options
    });

    App.on('initialize:after', function(options) {
        console.log('Initialization Finished');
    });

    // Here we can pass options to our applications
    // However it is optional

    App.on('start', function(options) {
        App.startUI(options);
    });

    return App;
});
