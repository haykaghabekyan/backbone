/**
 * Created by haykaghabekyan on 7/12/14.
 */

define(function (require) {
    'use strict';

    var $ = require('jquery');
    var app = require('starter');
    var MenuItems = require('app/navigation/collections/menu_items');
    var MenuCollectionView = require('app/navigation/views/menu_collection');

    return Marionette.ItemView.extend({
        template: 'app/navigation/templates/navigation_list.html',
        initialize: function () {
            var that = this;
            that.collection = new MenuItems();
        },
        onRender: function () {
            $.ajax({
                url: 'app/navigation/navigation.json',
                method: 'GET',
                async: false,
                success: function (data) {
                    app.vent.trigger('NavigationRendered', data);
                    this.addToCollection(data);
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    // This is loaded as part of app, so the require needs to go later in the file.
                    require(['app'], function (app) {
                        app.showError('Unable to load the navigation. Error: ' + errorThrown);
                    });
                },
                context: this
            });
        },
        addToCollection: function (items) {
            console.log(items);
            this.collection.add(items);
            this.renderCollectionView();

        },
        renderCollectionView: function () {
            var view = new MenuCollectionView({
                collection: this.collection
            });
            $('.navigation-list', this.$el).html(view.render().el.childNodes);
        }
    });
});