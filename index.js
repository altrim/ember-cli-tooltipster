/* eslint-env node */
'use strict';

const path = require('path');
const Funnel = require('broccoli-funnel');
const mergeTrees = require('broccoli-merge-trees');
const map = require('broccoli-stew').map;

const defaultOptions = {
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
    this._super.included.apply(this, arguments);

    // see: https://github.com/ember-cli/ember-cli/issues/3718
    while (typeof app.import !== 'function' && app.app) {
      app = app.app;
    }

    this.app = app;
    this.tooltipsterOptions = Object.assign(defaultOptions, app.options['ember-cli-tooltipster']);

    this.importDependencies(app);

    return app;
  },

  importDependencies(app) {
    app.import('vendor/tooltipster/tooltipster.bundle.js');

    if (this.tooltipsterOptions.importTooltipsterDefaultStyles) {
      app.import('vendor/tooltipster/tooltipster.bundle.css');
    }
    if (this.tooltipsterOptions.importTooltipsterBorderless) {
      app.import('vendor/tooltipster/tooltipster-sideTip-borderless.min.css');
    }
    if (this.tooltipsterOptions.importTooltipsterLight) {
      app.import('vendor/tooltipster/tooltipster-sideTip-light.min.css');
    }
    if (this.tooltipsterOptions.importTooltipsterNoir) {
      app.import('vendor/tooltipster/tooltipster-sideTip-noir.min.css');
    }
    if (this.tooltipsterOptions.importTooltipsterPunk) {
      app.import('vendor/tooltipster/tooltipster-sideTip-punk.min.css');
    }
    if (this.tooltipsterOptions.importTooltipsterShadow) {
      app.import('vendor/tooltipster/tooltipster-sideTip-shadow.min.css');
    }
  },

  treeForVendor(vendorTree) {
    var trees = [];
    var themes = [];
    var tooltipsterPath = path.dirname(require.resolve('tooltipster'));
    var tooltipsterCssPath = path.join(tooltipsterPath, '..', 'css');
    var tooltipsterThemePath = path.join(tooltipsterPath, '..', 'css', 'plugins', 'tooltipster', 'sideTip', 'themes');

    if (vendorTree) {
      trees.push(vendorTree);
    }

    let tooltipsterTree = new Funnel(tooltipsterPath, {
      destDir: 'tooltipster',
      files: ['tooltipster.bundle.js']
    });

    tooltipsterTree = map(tooltipsterTree, content => `if (typeof FastBoot === 'undefined') { ${content} }`);

    trees.push(tooltipsterTree);

    if (this.tooltipsterOptions.importTooltipsterDefaultStyles) {
      trees.push(
        new Funnel(tooltipsterCssPath, {
          destDir: 'tooltipster',
          files: ['tooltipster.bundle.css']
        })
      );
    }
    if (this.tooltipsterOptions.importTooltipsterBorderless) {
      themes.push('tooltipster-sideTip-borderless.min.css');
    }
    if (this.tooltipsterOptions.importTooltipsterLight) {
      themes.push('tooltipster-sideTip-light.min.css');
    }
    if (this.tooltipsterOptions.importTooltipsterNoir) {
      themes.push('tooltipster-sideTip-noir.min.css');
    }
    if (this.tooltipsterOptions.importTooltipsterPunk) {
      themes.push('tooltipster-sideTip-punk.min.css');
    }
    if (this.tooltipsterOptions.importTooltipsterShadow) {
      themes.push('tooltipster-sideTip-shadow.min.css');
    }

    trees.push(
      new Funnel(tooltipsterThemePath, {
        destDir: 'tooltipster',
        files: themes
      })
    );

    return mergeTrees(trees);
  }
};
