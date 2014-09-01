/**
 * Created by haykaghabekyan on 7/20/14.
 */

define(function (require) {
    'use strict';
    var Marionette = require('marionette');

    return Marionette.ItemView.extend({
        template: 'app/navigation/templates/menu_li.html',
        tagName: 'li'
    });
});
