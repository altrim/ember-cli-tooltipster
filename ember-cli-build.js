/* global require, module */
var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
    var app = new EmberAddon(defaults, {
      snippetPaths: ['tests/dummy/snippets'],
      snippetSearchPaths: ['tests/dummy/app']
    });

    /*
      This build file specifes the options for the dummy test app of this
      addon, located in `/tests/dummy`
      This build file does *not* influence how the addon or the app using it
      behave. You most likely want to be modifying `./index.js` or app's build file
      */

    app.import('bower_components/tooltipster/dist/js/tooltipster.bundle.min.js');
    app.import('bower_components/tooltipster/dist/css/tooltipster.bundle.min.css');

    app.import('bower_components/tooltipster-follower/dist/css/tooltipster-follower.min.css');
    app.import('bower_components/tooltipster-follower/dist/js/tooltipster-follower.js');

    return app.toTree();
};
