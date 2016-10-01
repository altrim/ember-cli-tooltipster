/*jshint node:true*/
module.exports = {
  description: 'ember-cli-tooltipster',
  normalizeEntityName: function() {
    // this prevents an error when the entityName is not specified
  },

  afterInstall: function( /*options*/ ) {
    return this.addBowerPackagesToProject([{
      name: 'tooltipster',
      target: '^4.1.5'
    }]);
  }
};
