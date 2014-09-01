/**
 * Created by haykaghabekyan on 7/16/14.
 */

define(function (require) {
    'use strict';

    var Backbone = require('backbone');

    var MenuItem = Backbone.Model.extend({
        defaults: {
            menu_text: '',
            name: '',
            route: '',
            class: '',
            style: '',
            children: []
        }
    });

    return MenuItem;
});