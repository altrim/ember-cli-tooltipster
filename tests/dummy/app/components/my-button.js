//components/my-button.js

import TooltipsterComponent from 'ember-cli-tooltipster/components/tool-tipster';

export default TooltipsterComponent.extend({
  tagName: 'button',

  classNames: ['my-awesome-button'],

  // define properties
  content: 'My awesome tooltip button',

  side: 'right',

  timer: 2000, // tooltip will close automatically after 2 seconds

  theme: 'tooltipster-noir'
});
