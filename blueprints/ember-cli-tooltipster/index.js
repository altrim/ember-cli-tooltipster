/*jshint node:true*/
module.exports = {
    description: 'ember-cli-tooltipster',

    afterInstall: function(options) {
        return this.addBowerPackageToProject('tooltipster');
    }
};
