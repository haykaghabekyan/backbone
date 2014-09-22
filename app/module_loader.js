/**
 * (C) Created by Hayk Aghabekyan on 22/09/14.
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
                }
            };

            $.ajax({
                url: 'modules.json',
                method: 'GET',
                async: true,
                success: function (data) {
                    modules = data.modules;
                    if (modules.length) {
                        that.modulesToLoad = modules.length;

                        modules.forEach(function (module) {
                            location = ['modules', '/' ,module.dir, '/', module.startModule].join('');
                            require([location], _.bind(loadModule, that, _.extend({}, module)));
                        });
                    } else {
                        that.app.vent.trigger('ModulesLoaded');
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    this.app.showError('Unable to load the products in Product Loader. Error: ' + errorThrown);
                },
                context: that
            });
        }
    });

    return ModuleLoader;
});