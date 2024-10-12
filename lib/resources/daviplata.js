/**
 * Module dependencies
 */
var util = require("util");
var Resource = require(".");

/**
 * Expose constructor
 */
module.exports = daviplata;

/**
 * Daviplata constructor
 */
function daviplata(epayco) {
  Resource.call(this, epayco);
}
/**
 * Create Trx Daviplata
 * @param {Object} options
 * @api public
 */
daviplata.prototype.create = function (options) {
  return this.request(
    "post",
    "/payment/process/daviplata",
    options,
    false,
    false,
    true,
    true
  );
};

daviplata.prototype.confirm = function (options) {
  return this.request(
    "post",
    "/payment/confirm/daviplata",
    options,
    false,
    false,
    true,
    true
  );
};

util.inherits(daviplata, Resource);
