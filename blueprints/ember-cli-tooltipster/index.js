module.exports = {
    description: 'ember-cli-tooltipster',
    normalizeEntityName: function() {},

    afterInstall: function(options) {
        return this.addBowerPackageToProject('tooltipster');
    }
};
