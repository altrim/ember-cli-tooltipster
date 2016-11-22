import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('tool-tipster', 'Integration | Component | tool tipster', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{tool-tipster}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#tool-tipster}}
      template block text
    {{/tool-tipster}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});


test('would work without Object.assign or Ember.assign present', function(assert) {
  const originalAssignRef = Object.assign;
  const emberAssignRef = Ember.assign;
  Object.assign = undefined;
  Ember.assign = undefined;
  this.render(hbs`
    {{#tool-tipster}}
      template block text
    {{/tool-tipster}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
  Object.assign = originalAssignRef;
  Ember.assign = emberAssignRef;
});