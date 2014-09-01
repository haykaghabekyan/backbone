/**
 * Created by haykaghabekyan on 7/13/14.
 */


define(function (require) {
    'use strict';

    var Marionette = require('marionette');
    var _ = require("underscore");
    var $ = require("jquery");
    var Handlebars = require("handlebars");

    Marionette.TemplateCache.prototype.loadTemplate = function (templateId) {
        // load your template here, returning a compiled template or function
        // that returns the rendered HTML
        var template;

        if (Handlebars.templates && Handlebars.templates[templateId]) {
            template = Handlebars.templates[templateId];
        } else {
            $.ajax({
                url: templateId,
                dataType: 'html',
                method: 'GET',
                async: false,
                success: function (data) {
                    template = data;
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    require(['app'], function (app) {
                        app.showError("Unable to load template in loadTemplate. Error: " + errorThrown);
                    });
                },
                context: this
            });
        }

        // send the template back
        return template;
    };

    Marionette.TemplateCache.prototype.compileTemplate = function (rawTemplate) {
        if ($.isFunction(rawTemplate)) {
            return rawTemplate;
        } else {
            return Handlebars.compile(rawTemplate);
        }
    };

    Marionette.Region.prototype.createAndShow = function (Klass, config) {
        var view;

        this._ensureElement();
        //this.close();

        view = new Klass(_.extend(config, {
            el: this.el
        }));
        view.remove = function () {
            this.$el.empty();
        };
        view.render();

        Marionette.triggerMethod.call(view, "show");
        //Marionette.triggerMethod.call(this, "show", view);

        this.currentView = view;
    };


});