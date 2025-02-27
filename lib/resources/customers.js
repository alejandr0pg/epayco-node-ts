/**
 * Module dependencies
 */
var util = require("util");
var Resource = require("./");

/**
 * Expose constructor
 */
module.exports = customers;

/**
 * Customers constructor
 */
function customers(epayco) {
  Resource.call(this, epayco);
}

util.inherits(customers, Resource);

/**
 * Create Customer
 * @param {Object} options
 * @api public
 */
customers.prototype.create = function (options) {
  return this.request("post", "/payment/v1/customer/create", options, false);
};

/**
 * Retrieve Customer
 *
 * @param {String} uid
 * @api public
 */
customers.prototype.get = function (uid) {
  return this.request(
    "get",
    "/payment/v1/customer/" + this._epayco.apiKey + "/" + uid,
    {},
    false
  );
};

/**
 * List Customer
 * @api public
 */
customers.prototype.list = function () {
  return this.request(
    "get",
    "/payment/v1/customers/" + this._epayco.apiKey,
    {},
    false
  );
};

/**
 * Update Customer
 *
 * @param {String} uid
 * @api public
 */
customers.prototype.update = function (uid, options) {
  return this.request(
    "post",
    "/payment/v1/customer/edit/" + this._epayco.apiKey + "/" + uid,
    options,
    false
  );
};

/**
 * Delete Customer
 *
 * @param {Object} options
 * @api public
 */
customers.prototype.delete = function (options) {
  return this.request("post", "/v1/remove/token", options, false);
};

/**
 * Add default card
 *
 * @param {Object} options
 * @api public
 */
customers.prototype.addDefaultCard = function (options) {
  return this.request(
    "post",
    "/payment/v1/customer/reasign/card/default",
    options,
    false,
    false,
    true
  );
};

/**
 * Add new token
 *
 * @param {Object} options
 * @api public
 */
customers.prototype.addNewToken = function (options) {
  return this.request(
    "post",
    "/v1/customer/add/token",
    options,
    false,
    false,
    true
  );
};
