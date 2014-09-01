/**
 * Created by haykaghabekyan on 7/16/14.
 */

define(function (require) {
    'use strict';

    var Backbone = require('backbone');
    var MenuItem = require('app/navigation/models/menu_item');

    var MenuItems = Backbone.Collection.extend({
        model: MenuItem
    });

    return MenuItems;

});