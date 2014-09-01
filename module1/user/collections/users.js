/**
 * (C) COPYRIGHT APP FACTORY 2014
 */

define(function (require) {
    "use strict";

    var Backbone = require('backbone');
    var User = require('module1/user/models/user');

    var Users = Backbone.Collection.extend({
        url: "user.php?users",
        model: User
    });

    // Return the collections for the module
    return Users;
});