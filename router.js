/**
 * (C) COPYRIGHT App Factory, 2014
 */

define(['marionette'], function (Marionette) {
    "use strict";

    return Marionette.AppRouter.extend({
        appRoutes: {
            "home": "showHome",
            "*actions": "showIndex"
        }
    });
});
