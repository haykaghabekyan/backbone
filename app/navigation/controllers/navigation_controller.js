/**
 * Created by haykaghabekyan on 7/16/14.
 */

define(function (require) {
    'use strict';

    var _ = require('underscore');
    var NavigationController = function () {

    };

    _.extend(NavigationController.prototype, {
        showNavigation: function () {
            require(['starter', 'app/navigation/views/navigation'], function (app, Navigation) {
                app.navigation.show(new Navigation());
            });
        }
    });

    return new NavigationController();
});