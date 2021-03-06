'use strict';

const logger = require('../lib/logger')('request');

const requestLoggerMiddleware = function* (next) {
  const { method, path, query } = this.request;
  logger.info(Object.assign({ method, path }, query));
  yield next;
};

module.exports = requestLoggerMiddleware;
