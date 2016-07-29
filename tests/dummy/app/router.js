import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('custom-components');
  this.route('advanced-options');
  this.route('tooltipster-plugins');
});

export default Router;
