//components/follower-tooltip.js

import TooltipsterComponent from 'ember-cli-tooltipster/components/tool-tipster';

export default TooltipsterComponent.extend({

  tagName: 'button',

  classNames: ['my-awesome-button'],

  content: 'Following the mouse with plugin',

  plugins: ['follower'],

  pluginOptions: ['offset', 'anchor'],

  offset: [5, 5],

  anchor: 'bottom-left'
});
