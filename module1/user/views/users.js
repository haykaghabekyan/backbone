/**
 * Created by haykaghabekyan on 7/13/14.
 */

define(function (require) {
    'use strict';

    var Marionette = require('marionette');

    var ItemView = require('module1/user/views/user');

    var Users = Marionette.CompositeView.extend({
        template: 'module1/user/templates/users.html',
        childView: ItemView,
        tagName: 'ul',
        childViewContainer: '.users'
    });

    return Users;
});