import Ember from 'ember';

const {
  run,
  observer,
  on,
  isEmpty,
  $,
  Handlebars: {
    SafeString
  }
} = Ember;

export default Ember.Component.extend({
  tooltipsterInstance: null,

  attributeBindings: ['title'],

  /**
   * Set how tooltips should be activated and closed.
   * Default: 'hover'
   * Options: [hover, click]
   * @type {String}
   */
  triggerEvent: 'hover',

  tooltipsterOptions: [
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
  ],

  _initializeTooltipster: on('didInsertElement', function() {
    let options = this._getOptions();
    let componentElement = this.$();
    componentElement.tooltipster(options);
    this.set('tooltipsterInstance', componentElement.tooltipster('instance'));
  }),

  _getOptions() {
    let options = this._getStandardOptions();

    let pluginOptions = this._getPluginOptions();
    for (var option in pluginOptions) {
      options[option] = pluginOptions[option];
    }

    return options;
  },

  _getStandardOptions() {
    let options = {};
    let content = this.get('content') || this.get('title');
    this.get('tooltipsterOptions').forEach((option) => {
      if (!isEmpty(this.get(option))) {
        options[option] = this.get(option);
      }
    });
    options.trigger = this.get('triggerEvent');
    // Handle SafeString
    if (content instanceof SafeString) {
      options.content = content.toString();
    }

    ['functionInit', 'functionBefore', 'functionReady', 'functionAfter', 'functionFormat', 'functionPosition'].forEach(fn => {
      options[fn] = $.proxy(this[fn], this);
    });
    return options;
  },

  _getPluginOptions() {
    let options = {};
    let pluginOptionKeys = this.get('pluginOptions');
    if (!isEmpty(pluginOptionKeys)) {
      pluginOptionKeys.forEach((pluginOption) => {
        options[pluginOption] = this.get(pluginOption);
      });
    }
    return options;
  },

  _onContentDidChange: observer('content', 'title', function() {
    run.scheduleOnce('afterRender', this, () => {
      let content = this.get('content') || this.get('title');
      if (content instanceof SafeString) {
        content = content.toString();
      }
      this.get('tooltipsterInstance').content(content);
    });
  }),

  _destroyTooltipster: on('willDestroyElement', function() {
    if (this.$().data('tooltipster-ns')) {
      this.$().tooltipster('destroy');
    }
    this.set('tooltipsterInstance', null);
    this.$().off();
  })
});
