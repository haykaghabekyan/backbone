/**
 * (C) COPYRIGHT APP FACTORY 2014
 */
define(function (require) {
    "use strict";
    var _ = require("underscore");
    var $ = require("jquery");

    var ModuleLoader = function (app) {
        this.app = app;
    };

    _.extend(ModuleLoader.prototype, {
        app: null,
        modulesToLoad: 0,
        modulesLoaded: 0,
        loadModules: function () {
            var that = this;
            var modules;
            var location;
            var loadModule = function (module, MyModule) {
                that.app.module(module.name, MyModule);
                that.modulesLoaded += 1;
                if (that.modulesToLoad === that.modulesLoaded) {
                    that.app.vent.trigger('ModulesLoaded');
                    //console.log('triggered: ModulesLoaded');
                }
            };

            $.ajax({
                url: 'modules.json',
                method: 'GET',
                async: false,
                success: function (data) {
                    modules = data.modules;
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    this.app.showError('Unable to load the products in Product Loader. Error: ' + errorThrown);
                },
                context: that
            });

            if (modules) {
                that.modulesToLoad = modules.length;

                modules.forEach(function (module) {
                    //console.log(module);
                    location = ['modules', '/' ,module.dir, '/', module.startModule].join('');
                    //console.log('location: ' + location);
                    require([location], _.bind(loadModule, that, _.extend({}, module)));
                });
            }
        }
    });

    return ModuleLoader;
});