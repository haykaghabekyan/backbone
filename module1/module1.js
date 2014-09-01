/**
 * Created by haykaghabekyan on 7/5/14.
 */

define(function (require) {
    'use strict';

    return {
        define: function (MyModule, App, Backbone, Marionette, $, _, config) {
            _.extend(MyModule, {
                app: App,
                start: function() {
                    var that = this;

                    that.app.vent.on('NavigationRendered', that.onNavigationRendered);
                    that.app.vent.on('RoutesReady', _.bind(that.loadRoutes, that));
                },
                onNavigationRendered: function (addedContent) {
                    var that = this;
                    var jsonData;

                    $.ajax({
                        url: 'module1/navigation.json',
                        method: 'GET',
                        async: false,
                        cache: false,
                        success: function (data) {
                            jsonData = data;
                        },
                        error: function (jqXHR, textStatus, errorThrown) {
                            require(['app'], function (app) {
                                app.showError('Unable to load the routes. Error: ' + errorThrown);
                            });
                        },
                        context: that
                    });

                    $.merge(addedContent, jsonData);
                },
                loadRoutes: function (router) {
                    var routes;

                    $.ajax({
                        url: 'module1/routes.json',
                        method: 'GET',
                        async: false,
                        success: function (data) {
                            routes = data;
                        },
                        error: function (jqXHR, textStatus, errorThrown) {
                            require(['app'], function (app) {
                                app.showError('Unable to load the routes. Error: ' + errorThrown);
                            });
                        },
                        context: this
                    });
                    //debugger;
                    router.processAppRoutes(this, routes);
                },
                getUsers: function () {
                    require(['module1/user/controllers/user_controller'], function (userController) {
                        userController.getUsers();
                    });
                },
                getUserById: function (id) {
                    console.log(id);
                },
                search: function () {
                    console.log("search");
                }
            });
            _.extend(MyModule, config);
        },
        startWithParent: true
    };

});