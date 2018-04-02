import Ember from 'ember';
import Component from '@ember/component';
import $ from 'jquery';
import { getOwner } from '@ember/application';
import { isEmpty } from '@ember/utils';
import { merge } from '@ember/polyfills';
import { observer } from '@ember/object';
import { run } from '@ember/runloop';
import { assign } from '@ember/polyfills';

const { isHTMLSafe } = Ember.String;

export default Component.extend({
  tooltipsterInstance: null,

  attributeBindings: ['title'],

  /**
   * Set how tooltip should be activated and closed.
   * Default: 'hover'
   * Options: [hover, click]
   * @type {String}
   */
  triggerEvent: 'hover',

  init() {
    this._super(...arguments);

    this.set('tooltipsterOptions', [
      'animation',
      'animationDuration',
      'arrow',
      'content',
      'contentAsHTML',
      'contentCloning',
      'debug',
      'delay',
      'delayTouch',
      'distance',
      'IEmin',
      'interactive',
      'maxWidth',
      'minIntersection',
      'minWidth',
      'plugins',
      'repositionOnScroll',
      'restoration',
      'selfDestruction',
      'side',
      'timer',
      'theme',
      'trackerInterval',
      'trackOrigin',
      'trackTooltip',
      'triggerClose',
      'triggerOpen',
      'updateAnimation',
      'viewportAware',
      'zIndex'
    ]);

    this.set('fnOptions', [
      'functionInit',
      'functionBefore',
      'functionReady',
      'functionAfter',
      'functionFormat',
      'functionPosition'
    ]);
  },

  didInsertElement() {
    this._super(...arguments);
    const options = this._getOptions();
    const componentElement = this.$();
    componentElement.tooltipster(options);
    this.set('tooltipsterInstance', componentElement.tooltipster('instance'));
  },

  _getOptions() {
    const options = this._getStandardOptions();
    const pluginOptions = this._getPluginOptions();

    for (let option in pluginOptions) {
      options[option] = pluginOptions[option];
    }
    return options;
  },

  _getStandardOptions() {
    const options = {};
    const addonConfig = getOwner(this).resolveRegistration('config:environment')['ember-cli-tooltipster'] || {};
    let content = this.get('content') || this.get('title');

    this.get('tooltipsterOptions').forEach(option => {
      if (!isEmpty(this.get(option))) {
        options[option] = this.get(option);
      }
    });

    options.trigger = this.get('triggerEvent');

    // Handle safe string using ishtmlsafe-polyfill
    if (isHTMLSafe(content)) {
      options.content = content.toString();
    }

    this.get('fnOptions').forEach(fn => (options[fn] = $.proxy(this[fn], this)));

    if (isEmpty(assign)) {
      const localAddonConfig = merge({}, addonConfig);
      return merge(localAddonConfig, options);
    }

    return assign({}, addonConfig, options);
  },

  _getPluginOptions() {
    const options = {};
    const pluginOptionKeys = this.get('pluginOptions');
    if (!isEmpty(pluginOptionKeys)) {
      pluginOptionKeys.forEach(pluginOption => (options[pluginOption] = this.get(pluginOption)));
    }
    return options;
  },

  _onContentDidChange: observer('content', 'title', function() {
    run.scheduleOnce('afterRender', this, () => {
      let content = this.get('content') || this.get('title') || null;
      if (isHTMLSafe(content)) {
        content = content.toString();
      }
      if (this.get('tooltipsterInstance') !== null) {
        this.get('tooltipsterInstance').content(content);
      }
    });
  }),

  willDestroyElement() {
    this._super(...arguments);
    if (this.$().data('tooltipster-ns')) {
      this.$().tooltipster('destroy');
    }
    this.set('tooltipsterInstance', null);
    this.$().off();
  }
});
