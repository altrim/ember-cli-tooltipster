/* jshint node: true */
'use strict';

var path = require('path');
var util = require('util');
var extend = util._extend;

var defaultOptions = {
  importTooltipsterLight: false,
  importTooltipsterNoir: false,
  importTooltipsterPunk: false,
  importTooltipsterShadow: false
};

module.exports = {
  name: 'ember-cli-tooltipster',

  included: function(app) {
    this._super.included(app);

    var options = extend(defaultOptions, app.options['ember-cli-tooltipster']);
    var themesPath = path.join(app.bowerDirectory, 'tooltipster/css/themes');

    app.import(app.bowerDirectory + '/tooltipster/css/tooltipster.css');

    if (options.importTooltipsterLight) {
      app.import(path.join(themesPath, 'tooltipster-light.css'));
    }
    if (options.importTooltipsterNoir) {
      app.import(path.join(themesPath, 'tooltipster-noir.css'));
    }
    if (options.importTooltipsterPunk) {
      app.import(path.join(themesPath, 'tooltipster-punk.css'));
    }
    if (options.importTooltipsterShadow) {
      app.import(path.join(themesPath, 'tooltipster-shadow.css'));
    }

    app.import(app.bowerDirectory + '/tooltipster/js/jquery.tooltipster.min.js');
  }
};
