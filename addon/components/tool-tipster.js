import Ember from 'ember';

export default Ember.Component.extend({

  attributeBindings: ['title'],

  updateTitle: Ember.observer('title', function() {
    Ember.run.schedule('afterRender', this, () => {
      this.$().tooltipster('content', this.get('title'));
    });
  }),

  updateContent: Ember.observer('content', function() {
    Ember.run.schedule('afterRender', this, () => {
      this.$().tooltipster('content', this.get('content'));
    });
  }),

  /**
   * Hide tooltip manually.
   * Send action `onTooltipHide` when the tooltip is fully closed.
   *
   * Please note that if the show/hide action is somehow cancelled before it has completed its animation,
   * the callback function will never be called.
   */
  hideTooltip: Ember.observer('hide', function() {
    const hide = this.get('hide');
    if (hide) {
      Ember.run.once(this, () => {
        this.$().tooltipster('hide', () => {
          this.sendAction('onTooltipHide');
        });
      });
    }
  }),

  /**
   * Show tooltip manually.
   * Send action `onTooltipShow` when the tooltip is fully open.
   *
   * Please note that if the show/hide action is somehow cancelled before it has completed its animation,
   * the callback function will never be called.
   */
  showTooltip: Ember.observer('show', function() {
    const show = this.get('show');
    if (show) {
      Ember.run.once(this, () => {
        this.$().tooltipster('show', () => {
          this.sendAction('onTooltipShow');
        });
      });
    }
  }),

  /**
   * Set how tooltips should be activated and closed.
   * Default: 'hover'
   * Options: [hover, click]
   * @type {String}
   */
  triggerEvent: 'hover',

  tooltipsterOptions: [
    'animation',
    'arrow',
    'arrowColor',
    'content',
    'contentAsHTML',
    'debug',
    'delay',
    'interactive',
    'minWidth',
    'maxWidth',
    'offsetX',
    'offsetY',
    'position',
    'positionTracker',
    'speed',
    'timer',
    'theme',
    'updateAnimation',
    'autoClose',
    'icon',
    'iconCloning',
    'iconDesktop',
    'iconTouch',
    'iconTheme'
  ],

  _initializeTooltipster: Ember.on('didInsertElement', function() {
    let options = {};

    this.get('tooltipsterOptions').forEach((item) => {
      if (!Ember.isEmpty(this.get(item))) {
        options[item] = this.get(item);
      }
    });

    options.trigger = this.get('triggerEvent');
    options.functionInit = Ember.$.proxy(this.functionInit, this);
    options.functionBefore = Ember.$.proxy(this.functionBefore, this);
    options.functionReady = Ember.$.proxy(this.functionReady, this);
    options.functionAfter = Ember.$.proxy(this.functionAfter, this);
    options.positionTrackerCallback = Ember.$.proxy(this.positionTrackerCallback, this);

    this.$().tooltipster(options);
  }),

  _destroyTooltipster: Ember.on('willDestroyElement', function() {
    this.$().tooltipster('destroy');
  }),

  /**
   * Send action `open` when the tooltip and its contents have been added to the DOM
   *
   * @method functionBefore
   */
  functionReady(origin, tooltip) {
    this.sendAction('open', tooltip);
  },

  /**
   * Send action `close` once the tooltip has been closed and removed from the DOM
   *
   * @method functionBefore
   */
  functionAfter( /*origin*/ ) {
    this.sendAction('close');
  }
});
