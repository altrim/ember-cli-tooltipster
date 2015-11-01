//components/ajax-tooltip.js
import Ember from 'ember';

import TooltipsterComponent from 'ember-cli-tooltipster/components/tool-tipster';

export default TooltipsterComponent.extend({
  tagName: 'button',

  position: 'right',

  classNames: ['my-awesome-button'],

  content: 'Loading description...',

  functionBefore: function(origin, continueTooltip) {

    // we'll make this function asynchronous and allow the tooltip
    // to go ahead and show the loading notification while fetching our data
    continueTooltip();

    // next, we want to check if our data has already been cached
    if (origin.data('ajax') !== 'cached') {
      Ember.$.ajax({
        type: 'GET',
        url: 'https://api.github.com/repos/altrim/ember-cli-tooltipster',
        success: function(data) {
          // update our tooltip content with ember-cli-tooltipster description and cache it
          origin.tooltipster('content', data.description).data('ajax', 'cached');
        }
      });
    }
  }
});
