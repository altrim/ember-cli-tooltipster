/* jshint node: true */
'use strict';

module.exports = {
    name: 'ember-cli-tooltipster',

    included: function(app) {
        this._super.included(app);

        app.import(app.bowerDirectory + '/tooltipster/js/jquery.tooltipster.min.js');
        app.import(app.bowerDirectory + '/tooltipster/css/tooltipster.css');
    }
};
