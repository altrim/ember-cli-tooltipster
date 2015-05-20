import Ember from 'ember';

export default Ember.Component.extend({

    classNameBindings: ['tooltip'],

    attributeBindings: ['title'],

    updateTitle: Ember.observer('title', function() {
      Ember.run.schedule('afterRender', this, function() {
        this.$().tooltipster('content', this.get('title'));
      });
    }),

    updateContent: Ember.observer('content', function(){
      Ember.run.schedule('afterRender', this, function() {
        this.$().tooltipster('content', this.get('content'));
      });
    }),

    /**
     * Set how tooltips should be activated and closed.
     * Default: 'hover'
     * Options: [hover, click]
     * @type {String}
     */
    triggerEvent: 'hover',

    tooltipsterOptions: ['animation', 'arrow', 'arrowColor', 'content', 'contentAsHTML', 'debug', 'delay', 'interactive',
        'minWidth', 'maxWidth', 'offsetX', 'offsetY', 'position', 'positionTracker', 'speed', 'timer', 'theme',
        'updateAnimation'
    ],

    _initializeTooltipster: function() {
        var _this = this;
        var options = {};

        _this.get('tooltipsterOptions').forEach(function(item) {
            if (!Ember.isEmpty(_this.get(item))) {
                options[item] = _this.get(item);
            }
        });

        options.trigger = _this.get('triggerEvent');
        options.functionInit = Ember.$.proxy(this.functionInit, this);
        options.functionBefore = Ember.$.proxy(this.functionBefore, this);
        options.functionReady = Ember.$.proxy(this.functionReady, this);
        options.functionAfter = Ember.$.proxy(this.functionAfter, this);
        options.positionTrackerCallback = Ember.$.proxy(this.positionTrackerCallback, this);

        this.$().tooltipster(options);

    }.on('didInsertElement'),

    _destroyTooltipster: function() {
        this.$().tooltipster('destroy');
    }.on('willDestroyElement'),
});
