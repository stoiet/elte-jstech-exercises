'use strict';

const logger = require('../lib/logger')('request');
const isString = require('lodash/isString');

const sourceValidationMiddleware = function* (next) {
  const { source } = this.request.body;
  this.assert(isString(source), 400, 'Invalid source!');
  yield next;
};

module.exports = sourceValidationMiddleware;
