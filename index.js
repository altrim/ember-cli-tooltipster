'use strict';

module.exports = {
    name: 'ember-cli-tooltipster',

    included: function(app) {
        this._super.included(app);

        app.import('bower_components/tooltipster/js/jquery.tooltipster.min.js');
        app.import('bower_components/tooltipster/css/tooltipster.css');
    }
};
