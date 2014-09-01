// Filename: app.js

define(function (require) {
    'use strict';

    var $ = require('jquery');
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var Router = require('router');
    var NavigationController = require('app/navigation/controllers/navigation_controller');

    var App = Marionette.Application.extend({
        configs: null,
        currentRequests: {},
        lastFragments: [],
        startUI: function (options) {
            var app = this;

            $.ajaxSetup({
                timeout: 120000
            });

            app.configs = options;

            app.createLayout();

            app.router = new Router({
                controller: app
            });

            app.vent.trigger('RoutesReady', app.router);
            app.router.on("route", app.onRoute, app);
            app.vent.on('app:title_change', this.setTitle);

            if(!Backbone.History.started) {
                Backbone.history.start({
                    //pushState: true
                });
            }
        },
        createLayout: function () {
            require(['starter'], function (app) {
                app.addRegions({
                    content: '#content',
                    navigation: '#navigation'
                });

                NavigationController.showNavigation();
            });
        },
        onRoute: function () {
            var lastFragment = Backbone.history.getFragment();
            this.addFragment(lastFragment);
        },
        addFragment: function (fragment) {
            if (this.lastFragments.length === 2) {
                if (this.lastFragments[1] !== fragment) {
                    this.lastFragments = this.lastFragments.slice(1);
                    this.lastFragments.push(fragment);
                }
            } else if (this.lastFragments.length === 1) {
                if (this.lastFragments[0] !== fragment) {
                    this.lastFragments.push(fragment);
                }
            } else {
                this.lastFragments.push(fragment);
            }
        },
        setTitle: function (title) {
            $(document).attr('title', title);
        },
        getCacheBuster: function () {
            var that = this;
            var cacheBuster = that.configs.cacheBuster;
            cacheBuster = cacheBuster.replace("_=", "");

            return cacheBuster;
        },
        showError: function (errorMessage) {
            alert(errorMessage);
        },
        showHome: function () {
            console.log('showHome');
        },
        showIndex: function () {
            console.log('showIndex');
            // Default to show home, if there is no default home page.
            this.showHome();
        }
    });

    return App;

});