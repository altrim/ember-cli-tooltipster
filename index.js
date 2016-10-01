/* jshint node: true */
'use strict';

var path = require('path');
var util = require('util');
var extend = util._extend;

var defaultOptions = {
  importTooltipsterDefaultStyles: true,
  importTooltipsterBorderless: false,
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
    var themesPath = path.join(app.bowerDirectory, 'tooltipster/dist/css/plugins/tooltipster/sideTip/themes/');

    if (options.importTooltipsterDefaultStyles) {
      app.import(app.bowerDirectory + '/tooltipster/dist/css/tooltipster.bundle.min.css');
    }
    if (options.importTooltipsterBorderless) {
      app.import(path.join(themesPath, 'tooltipster-sideTip-borderless.min.css'));
    }
    if (options.importTooltipsterLight) {
      app.import(path.join(themesPath, 'tooltipster-sideTip-light.min.css'));
    }
    if (options.importTooltipsterNoir) {
      app.import(path.join(themesPath, 'tooltipster-sideTip-noir.min.css'));
    }
    if (options.importTooltipsterPunk) {
      app.import(path.join(themesPath, 'tooltipster-sideTip-punk.min.css'));
    }
    if (options.importTooltipsterShadow) {
      app.import(path.join(themesPath, 'tooltipster-sideTip-shadow.min.css'));
    }

    if (!process.env.EMBER_CLI_FASTBOOT) {
      app.import(app.bowerDirectory + '/tooltipster/dist/js/tooltipster.bundle.min.js');
    }
  }
};
