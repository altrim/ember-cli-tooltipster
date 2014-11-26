module.exports = {
    description: 'ember-cli-tooltipster',
    normalizeEntityName: function() {},

    // locals: function(options) {
    //   // Return custom template variables here.
    //   return {
    //     foo: options.entity.options.foo
    //   };
    // }

    afterInstall: function(options) {
        return this.addBowerPackageToProject('tooltipster');
    }
};
