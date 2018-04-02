//components/follower-tooltip.js

import TooltipsterComponent from 'ember-cli-tooltipster/components/tool-tipster';

export default TooltipsterComponent.extend({
  tagName: 'button',

  classNames: ['my-awesome-button'],

  content: 'Following the mouse with plugin',

  anchor: 'bottom-left',

  init() {
    this._super(...arguments);

    this.set('plugins', ['follower']);
    this.set('pluginOptions', ['offset', 'anchor']);
    this.set('offset', [5, 5]);
  }
});
