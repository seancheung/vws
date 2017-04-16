const request = require('request');
const config = require('./config');

/**
 * VWS
 * 
 * @param {any} options 
 */
function VWS(options) {
    if (options) {
        if (options.url) {
            config.url.targets = options.url.targets || config.url.targets;
            config.url.duplicates = options.url.duplicates || config.url.duplicates;
            config.url.duplicates = options.url.duplicates || config.url.duplicates;
        }
        if (options.credentials) {
            config.credentials.accessKey = options.credentials.accessKey || config.credentials.accessKey;
            config.credentials.secretKey = options.credentials.secretKey || config.credentials.secretKey;
        }
        config.maxImageSize = options.maxImageSize || config.maxImageSize;
        config.maxMetaSize = options.maxMetaSize || config.maxMetaSize;
        config.namingRule = options.namingRule || config.namingRule;
    }
    this.options = config;
}

VWS.prototype.getTargets = function () {
    
}

VWS.prototype.getTarget = function (id) {

}

VWS.prototype.updateTarget = function (id, target) {

}

VWS.prototype.addTarget = function (target) {

}

VWS.prototype.deleteTarget = function (id) {

}

VWS.prototype.getDuplicates = function (id) {

}

VWS.prototype.getDatabaseSummary = function () {

}

VWS.prototype.getTargetSummary = function (id) {

}

module.exports = VWS;