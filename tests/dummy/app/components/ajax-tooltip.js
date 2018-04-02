//components/ajax-tooltip.js
import Ember from 'ember';
import $ from 'jquery';
const { inject } = Ember;

import TooltipsterComponent from 'ember-cli-tooltipster/components/tool-tipster';

export default TooltipsterComponent.extend({
  tagName: 'button',

  ajax: inject.service(),

  side: 'right',

  classNames: ['my-awesome-button'],

  content: 'Loading description...',

  theme: 'tooltipster-borderless',

  functionBefore(instance, helper) {
    let $origin = $(helper.origin);
    // we set a variable so the data is only loaded once via Ajax, not every time the tooltip opens
    if ($origin.data('loaded') !== true) {
      this.get('ajax')
        .request('https://api.github.com/repos/altrim/ember-cli-tooltipster')
        .then(data => {
          // update our tooltip content with ember-cli-tooltipster description and cache it
          instance.content(data.description);
          // to remember that the data has been loaded
          $origin.data('loaded', true);
        });
    }
  }
});
