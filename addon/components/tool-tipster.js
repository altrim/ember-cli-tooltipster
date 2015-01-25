import Ember from 'ember';

export default Ember.Component.extend({

    classNameBindings: ['tooltip'],

    attributeBindings: ['title'],

    updateTitle: Ember.observer('title', function() {
        this.$().tooltipster('content', this.get('title'));
    }),

    /**
     * Set the position of the tooltip.
     * Default: 'top'
     * Options: [right, left, top, top-right, top-left, bottom, bottom-right, bottom-left]
     * @type {String}
     */
    position: 'top',

    /**
     * Offsets the tooltip (in pixels) farther left/right from the origin.
     * Default: 0
     * @type {Number}
     */
    offsetX: 0,

    /**
     * Offsets the tooltip (in pixels) farther up/down from the origin.
     * Default: 0
     * @type {Number}
     */
    offsetY: 0,

    /**
     * Determines how the tooltip will animate in and out.
     * Default: 'fade'
     * Options: [fade, grow, swing, slide, fall]
     * @type {String}
     */
    animation: 'fade',

    /**
     * Delay how long it takes (in milliseconds) for the tooltip to start animating in.
     * Default: 300
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

    /**
     * Adds the "speech bubble arrow" to the tooltip.
     * Default: true
     * @type {Boolean}
     */
    arrow: true,

    /**
     * Set a minimum width for the tooltip.
     * Default: 0 (auto width)
     * @type {Number}
     */
    minWidth: 0,

    /**
     * Set a maximum width for the tooltip.
     * Default: null (no max width)
     * @type {Number}
     */
    maxWidth: null,

    /**
     * How long the tooltip should be allowed to live before closing.
     * Default: 0 (disabled)
     * @type {Number}
     */
    timer: 0,

    _initializeTooltipster: function() {
        var _this = this,

            options = {
                position: _this.get('position'),
                offsetX: _this.get('offsetX'),
                offsetY: _this.get('offsetY'),
                animation: _this.get('animation'),
                delay: _this.get('delay'),
                theme: _this.get('theme'),
                trigger: _this.get('triggerEvent'),
                arrow: _this.get('arrow'),
                minWidth: _this.get('minWidth'),
                maxWidth: _this.get('maxWidth'),
                timer: _this.get('timer')
            };

        this.$().tooltipster(options);

    }.on('didInsertElement')

});
