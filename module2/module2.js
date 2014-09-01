/**
 * Created by haykaghabekyan on 7/5/14.
 */

define(function (require) {

    'use strict';

    return {
        define: function (MyModule, App, Backbone, Marionette, $, _) {
            _.extend(MyModule, {
                app: App,
                start: function() {
                    var that = this;
                    that.app.vent.on('RoutesReady', _.bind(that.loadRoutes, that));
                },
                loadRoutes: function (router) {
                    var routes;

                    $.ajax({
                        url: "module2/routes.json",
                        method: 'GET',
                        async: false,
                        success: function (data) {
                            routes = data;
                        },
                        error: function (jqXHR, textStatus, errorThrown) {
                            require(['app'], function (app) {
                                app.showError("Unable to load the routes. Error: " + errorThrown);
                            });
                        },
                        context: this
                    });
                    router.processAppRoutes(this, routes);
                },
                module2: function () {
                    console.log('module2');
                },
                module2Index: function () {
                    console.log('module2 user');
                }
            });
        }
    };

});