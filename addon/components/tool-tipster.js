import Ember from 'ember';

export default Ember.Component.extend({

  classNameBindings: ['tooltip'],

  attributeBindings: ['title'],

    /**
     * Set the position of the tooltip.
     * Default: 'top'
     * Options: [right, left, top, top-right, top-left, bottom, bottom-right, bottom-left]
     * @type {String}
     */
     position: 'top',

    /**
     * Determines how the tooltip will animate in and out.
     * Default: 'fade'
     * Options: [fade, grow, swing, slide, fall]
     * @type {String}
     */
     animation: 'fade',

    /**
     * Delay how long it takes (in milliseconds) for the tooltip to start animating in.
     * Default: 200
     * @type {Number}
     */
     delay: 300,

    /**
     * Set the theme used for your tooltip.
     * Default: 'tooltipster-default'
     * @type {String}
     */
     theme: 'tooltipster-default',

    /**
     * Set how tooltips should be activated and closed.
     * Default: 'hover'
     * Options: [hover, click]
     * @type {String}
     */
     triggerEvent: 'hover',

     _initializeTooltipster: function() {
      var _this = this,

      tooltipOptions = {
        position: _this.get('position'),
        animation: _this.get('animation'),
        delay: _this.get('delay'),
        theme: _this.get('theme'),
        trigger: _this.get('triggerEvent')
      };

      this.$().tooltipster(tooltipOptions);

    }.on('didInsertElement')

  });
