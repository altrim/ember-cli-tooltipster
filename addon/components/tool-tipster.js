import Ember from 'ember';

/*
 * Only calls fn if component is inDOM. Furthermore, binds fn to fnContext
 */
var callIfInDom = function(component, fn, fnContext) {
  // If fn does not exist, return the same fn value so tooltipster default
  // callback takes effect.
  if ( !fn ) { return fn; }
  var _this = fnContext || component;
  var callback = fn || Ember.K;
  return function() {
    if (component._state === 'inDOM') {
      callback.apply(_this, arguments);
    }
  };
};

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

    _initializeTooltipster: Ember.on('didInsertElement', function() {
        var _this = this;
        var options = {};

        _this.get('tooltipsterOptions').forEach(function(item) {
            if (!Ember.isEmpty(_this.get(item))) {
                options[item] = _this.get(item);
            }
        });

        options.trigger = _this.get('triggerEvent');
        options.functionInit = callIfInDom(this, this.functionInit, this);
        options.functionBefore = callIfInDom(this, this.functionBefore, this);
        options.functionReady = callIfInDom(this, this.functionReady, this);
        options.functionAfter = callIfInDom(this, this.functionAfter, this);
        options.positionTrackerCallback = callIfInDom(this, this.positionTrackerCallback, this);

        this.$().tooltipster(options);

    }),

    _destroyTooltipster: Ember.on('willDestroyElement', function() {
        this.$().tooltipster('destroy');
    }),
    /**
    * Send action ´open´ when open info
    *
    * @method functionBefore
    **/
    functionReady: function(origin, tooltip) {
        this.sendAction('open', tooltip);
    },

    /**
    * Send action close when close info
    *
    * @method functionBefore
    **/
    functionAfter: function(/*origin*/) {
        this.sendAction('close');
    }
});
