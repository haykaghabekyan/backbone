/**
 * Created by haykaghabekyan on 7/13/14.
 */

define(function (require) {
    'use strict';

    var Marionette = require('marionette');

    var Users = Marionette.ItemView.extend({
        template: 'modules/module1/user/templates/user.html',
        tagName: 'li',
        attributes: {
            class: 'name'
        },
        initialize: function () {
            //console.log(this);
        },
        events: {
            "click.name": "onClick"
        },
        onClick: function () {
            console.log(this.model.get('first_name'));
        }
    });

    return Users;
});