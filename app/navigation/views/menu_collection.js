/**
 * Created by haykaghabekyan on 7/20/14.
 */

define(function (require) {
    'use strict';
    var Marionette = require('marionette');
    var MenuItemView = require('app/navigation/views/menu_item');

    return Marionette.CollectionView.extend({
        childView: MenuItemView
    });
});
