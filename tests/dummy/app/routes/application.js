import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    transitionTo(route) {
      this.transitionTo(route);
    },

    linkTo(url) {
      window.open(url);
    }
  }
});
