/**
 * Created by haykaghabekyan on 7/5/14.
 */

define(function (require) {
    'use strict';

    var _ = require("underscore");

    var UserController = function () {

    };

    _.extend(UserController.prototype, {
        getUsers: function () {
            require(['starter', 'modules/module1/user/collections/users', 'modules/module1/user/views/users'], function (app, Users, UserView) {
                var UsersCollection = new Users();
                var UsersCollectionPromise = UsersCollection.fetch();
                UsersCollectionPromise.done(function () {
                    console.log(UsersCollection);
                    app.content.show(new UserView({
                        collection: UsersCollection
                        //users: UsersCollection
                    }));
                });
            });
        }
    });

    return new UserController();

});