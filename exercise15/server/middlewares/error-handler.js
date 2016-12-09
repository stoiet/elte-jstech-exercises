'use strict';

const logger = require('../lib/logger')('error');

const errorHandlerMiddleware = function *(next) {
  try { yield next; }
  catch(exception) {
    logger.error(Object.assign({
      status: exception.status || 500,
      message: exception.message || 'Internal Server Error'
    }, exception));

    this.response.status = exception.status || 500;
  }
}

module.exports = errorHandlerMiddleware;
